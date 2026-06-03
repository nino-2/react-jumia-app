/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import NavCheckout from '../component/NavCheckout'
import { useAddress } from '../../Context/AddressContext'
import { useCart } from '../../Context/CartContext'
import Spinner from '../component/Spinner'

const CheckoutPage = () => {
  const API_URL = import.meta.env.VITE_API_URL
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const reference = searchParams.get('reference') || searchParams.get('trxref')

  const { addresses, getAddress, loading: addressLoading } = useAddress()
  const { cartItems, fetchCart, clearCart } = useCart()
  const [selectedAddress, setSelectedAddress] = useState('')
  const [processing, setProcessing] = useState(false)
  const [verifying, setVerifying] = useState(Boolean(reference))
  const [paymentStatus, setPaymentStatus] = useState(null)
  const [error, setError] = useState('')

  const defaultAddress = useMemo(
    () => addresses.find((addr) => addr.isDefault) || addresses[0],
    [addresses]
  )

  const orderTotal = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + (item.product?.salesprice || 0) * item.quantity,
        0
      ),
    [cartItems]
  )

  useEffect(() => {
    if (!token) {
      navigate('/identification')
      return
    }

    getAddress()
    fetchCart()
  }, [])

  useEffect(() => {
    if (defaultAddress && !selectedAddress) {
      setSelectedAddress(defaultAddress._id)
    }
  }, [defaultAddress, selectedAddress])

  useEffect(() => {
    const verifyPayment = async () => {
      if (!reference || !token) return

      try {
        setVerifying(true)
        const res = await axios.get(`${API_URL}/payment/verify/${reference}`, {
          headers: { Authorization: `Bearer ${token}` },
        })

        setPaymentStatus({
          message: res.data.message || 'Payment successful. Your order has been placed.',
          order: res.data.order,
        })
        clearCart()
        navigate('/customer/order', {
          replace: true,
          state: { orderId: res.data.order?._id },
        })
      } catch (err) {
        setError(
          err.response?.data?.message ||
            'Payment verification failed. Please contact support if your account was debited.'
        )
      } finally {
        setVerifying(false)
      }
    }

    verifyPayment()
  }, [reference, token])

  const initializePayment = async () => {
    if (!selectedAddress) {
      setError('Please add or select a delivery address before payment.')
      return
    }

    if (!cartItems.length) {
      setError('Your cart is empty.')
      return
    }

    try {
      setError('')
      setProcessing(true)
      const res = await axios.post(
        `${API_URL}/payment/initialize`,
        { addressId: selectedAddress },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      window.location.href = res.data.authorization_url
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to start payment.')
      setProcessing(false)
    }
  }

  const formatNaira = (amount) => `₦${Number(amount || 0).toLocaleString()}`

  return (
    <> 
       {/*Navbar*/}
       <NavCheckout/>
       
       <main className='outter'>
            <div className='checkout-layout'>
              <section className='checkout-main'>
                {verifying ? (
                  <div className='checkout-card checkout-state'>
                    <Spinner/>
                    <h1 className='checkout-title'>Verifying payment</h1>
                    <p className='checkout-copy'>Please wait while we confirm your Paystack test payment.</p>
                  </div>
                ) : paymentStatus ? (
                  <div className='checkout-card checkout-state'>
                    <div className='checkout-success-mark'>✓</div>
                    <h1 className='checkout-title'>Order placed</h1>
                    <p className='checkout-copy'>{paymentStatus.message}</p>
                    <p className='checkout-copy'>Order number: {paymentStatus.order?.orderNumber}</p>
                    <Link to='/customer/order'>
                      <button className='crt-c-btn'>View Orders</button>
                    </Link>
                  </div>
                ) : (
                  <>
                    <section className='checkout-card'>
                      <div className='checkout-card-head'>
                        <h1 className='checkout-title'>1. Delivery address</h1>
                        <Link to='/customer/address/create' className='checkout-link'>Add address</Link>
                      </div>

                      {addressLoading ? (
                        <p className='checkout-copy'>Loading addresses...</p>
                      ) : addresses.length ? (
                        <div className='checkout-addresses'>
                          {addresses.map((addr) => (
                            <label className='checkout-address' key={addr._id}>
                              <input
                                type='radio'
                                name='address'
                                value={addr._id}
                                checked={selectedAddress === addr._id}
                                onChange={() => setSelectedAddress(addr._id)}
                              />
                              <span>
                                <strong>{addr.firstname} {addr.lastname}</strong>
                                <small>{addr.deliveryadd}, {addr.city}, {addr.state}</small>
                                <small>{addr.phonenumber}</small>
                              </span>
                            </label>
                          ))}
                        </div>
                      ) : (
                        <p className='checkout-copy'>No delivery address found. Add one before payment.</p>
                      )}
                    </section>

                    <section className='checkout-card'>
                      <h1 className='checkout-title'>2. Payment method</h1>
                      <label className='checkout-address checkout-payment-option'>
                        <input type='radio' checked readOnly />
                        <span>
                          <strong>Paystack test payment</strong>
                          <small>Use Paystack test cards to complete this order.</small>
                        </span>
                      </label>
                    </section>
                  </>
                )}

                {error && <p className='checkout-error'>{error}</p>}
              </section>

              {!paymentStatus && !verifying && (
                <aside className='checkout-summary'>
                  <div className='crt-card'>
                    <h1 className='crt-summ'>ORDER SUMMARY</h1>
                    <div className='checkout-summary-row'>
                      <span>Items total ({cartItems.length})</span>
                      <strong>{formatNaira(orderTotal)}</strong>
                    </div>
                    <div className='checkout-summary-row'>
                      <span>Delivery fees</span>
                      <strong>₦0</strong>
                    </div>
                    <div className='crt-subt'>
                      <p className='crt-tt'>Total</p>
                      <p className='crt-amt'>{formatNaira(orderTotal)}</p>
                    </div>
                    <button
                      className='crt-c-btn'
                      onClick={initializePayment}
                      disabled={processing || !cartItems.length}
                    >
                      {processing ? 'Redirecting...' : `Pay ${formatNaira(orderTotal)}`}
                    </button>
                  </div>
                </aside>
              )}
            </div>
       </main>

    </>
  )
}

export default CheckoutPage
