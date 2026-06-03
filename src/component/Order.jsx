import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Order = () => {
  const API_URL = import.meta.env.VITE_API_URL
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const location = useLocation()
  const highlightedOrderId = location.state?.orderId
  const [Selected, setSelected] = useState('ongoing')
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchOrders = async () => {
      if (!token) {
        navigate('/identification')
        return
      }

      try {
        setLoading(true)
        const res = await axios.get(`${API_URL}/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        setOrders(res.data.orders || [])
      } catch (err) {
        setError(err.response?.data?.message || 'Unable to fetch your orders.')
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [API_URL, navigate, token])

  const ongoingOrders = useMemo(
    () => orders.filter((order) => order.orderStatus !== 'cancelled'),
    [orders]
  )

  const cancelledOrders = useMemo(
    () => orders.filter((order) => order.orderStatus === 'cancelled'),
    [orders]
  )

  const selectedOrders = Selected === 'ongoing' ? ongoingOrders : cancelledOrders

  const formatNaira = (amount) => `₦${Number(amount || 0).toLocaleString()}`

  const formatDate = (date) =>
    new Date(date).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })

  return (
    <div className='int-crd php'>
      <div className='acc-head'>
        <h1 className='acc-text'>Orders</h1>
      </div>
      <div className='ord-body'>
        <div className='ord-spc'>
          <div className='ord-opt'>
            <button
              type='button'
              onClick={() => setSelected('ongoing')}
              className={`ord-sel ${Selected === 'ongoing' ? 'active' : ''}`}
            >
              ONGOING/DELIVERED ({ongoingOrders.length})
            </button>
            <button
              type='button'
              onClick={() => setSelected('cancelled')}
              className={`ord-sel ${Selected === 'cancelled' ? 'active' : ''}`}
            >
              CANCELED/RETURNED ({cancelledOrders.length})
            </button>
          </div>
        </div>

        {loading ? (
          <div className='ord-tac'>
            <p className='ord-txt'>Loading your orders...</p>
          </div>
        ) : error ? (
          <div className='ord-tac'>
            <h2 className='ord-txt'>{error}</h2>
            <button className='crt-btn' onClick={() => window.location.reload()}>
              Try Again
            </button>
          </div>
        ) : selectedOrders.length ? (
          <div className='orders-list'>
            {selectedOrders.map((order) => (
              <article
                className={`order-card ${
                  highlightedOrderId === order._id ? 'order-card-highlight' : ''
                }`}
                key={order._id}
              >
                <div className='order-card-head'>
                  <div>
                    <h2 className='order-number'>{order.orderNumber}</h2>
                    <p className='order-date'>Placed on {formatDate(order.createdAt)}</p>
                  </div>
                  <span className='order-status'>{order.orderStatus}</span>
                </div>

                <div className='order-items'>
                  {order.items.map((item, index) => (
                    <div className='order-item' key={`${order._id}-${item.product}-${index}`}>
                      <img
                        className='order-item-img'
                        src={item.image || '/orders-first.svg'}
                        alt={item.name}
                      />
                      <div className='order-item-info'>
                        <p className='order-item-name'>{item.name}</p>
                        <p className='order-item-meta'>
                          Qty: {item.quantity} · {formatNaira(item.price)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='order-card-foot'>
                  <span>Payment: {order.paymentStatus}</span>
                  <strong>{formatNaira(order.amount + (order.deliveryFee || 0))}</strong>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className='ord-tac'>
            <img className='ord-img' src='/orders-first.svg' alt='' />
            <h2 className='ord-txt'>You have placed no orders yet!</h2>
            <p className='ord-txts'>
              All your orders will be saved here for you to access their state anytime.
            </p>
            <Link to='/'>
              <button className='crt-btn'>Start Shopping</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Order
