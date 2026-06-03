import React, { useEffect, useState } from 'react'
import { Link, useSearchParams} from 'react-router-dom'
import axios from 'axios'

const Content = () => {
  const API_URL = import.meta.env.VITE_API_URL
  const [products, setProducts] = useState([])
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get('search')?.trim() || ''
 
  const appsection = [
    {id: 1, image: "/appair.png"},
    {id: 2, image: "/fan.jpg"},
    {id: 3, image: "/fridges.png"},
    {id: 4, image: "/micro.png"},
    {id: 5, image: "/kettle.png"},
    {id: 6, image: "/blenders.png"},
    {id: 7, image: "/hair.png"},
  ]
  {/*Fetch Product API*/}
  useEffect(() => {
   const url = searchTerm
    ? `${API_URL}/products?search=${encodeURIComponent(searchTerm)}`
    : `${API_URL}/products`

   axios.get(url)
   .then((response)=> {
    console.log('API Response:', response.data);
    if (response.data) {
      setProducts(response.data)
    }
   })
   .catch((err)=>{
    console.log('Product not found', err);
   })
    
  }, [API_URL, searchTerm])
  
  
  return (
    <>
      <main className='outter'>
        {searchTerm && (
          <section className='search-results'>
            <header className='search-results-head'>
              <h1 className='search-results-title'>Search results for "{searchTerm}"</h1>
              <Link to='/' className='search-clear'>Clear search</Link>
            </header>
            <div className='search-results-grid'>
              {products.length ? (
                products.map((product) => (
                  <Link
                    key={product._id}
                    to={`/products/${product._id}`}
                    className='search-product-card'
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <img src={product.images[0]} alt={product.name} className='search-product-img' />
                    <p className='cdtxt'>{product.name}</p>
                    <p className='cdamt'>&#8358;{product.salesprice.toLocaleString()}</p>
                    <p className='cdnt'>&#8358;{product.initialprice.toLocaleString()}</p>
                  </Link>
                ))
              ) : (
                <p className='search-empty'>No products found. Try another product name, brand, or category.</p>
              )}
            </div>
          </section>
        )}
        {!searchTerm && (
        <>
        <div className='inner'>
          <div className='first'>
            <div className='firstinner'>
              <Link className='outline'>
                <img
                  src="/appliance.png"
                  style={{height: '20px', marginRight:'4px'}}
                 
                />
                <span className='fort'>Appliances</span>
              </Link>
              <Link  className='outline'>
                <img
                  src="/mobile-phone.png"
                  style={{height: '20px',marginRight:'4px'}}
                 
                />
                <span className='fort'>Phones & Tablets</span>
              </Link>
              <Link  className='outline'>
                <img
                  src="/hbeauty.png"
                  style={{height: '20px',marginRight:'4px'}}
                 
                />
                <span className='fort'>Health & Beauty</span>
              </Link>
              <Link  className='outline'>
                <img
                  src="/home.svg"
                  style={{height: '20px',marginRight:'4px'}}
                 
                />
                <span className='fort'>Home & Office</span>
              </Link>
              <Link  className='outline'>
                <img
                  src="/tv.png"
                  style={{height: '20px',marginRight:'4px'}}
                 
                />
                <span className='fort'>Electronics</span>
              </Link>
              <Link  className='outline'>
                <img
                  src="/fashion.png"
                  style={{height: '20px',marginRight:'4px'}}
                 
                />
                <span className='fort'>Fashion</span>
              </Link>
              <Link  className='outline'>
                <img
                  src="/supermarket.png"
                  style={{height: '20px',marginRight:'4px'}}
                 
                />
                <span className='fort'>Supermarket</span>
              </Link>
              <Link  className='outline'>
                <img
                  src="/compute.png"
                  style={{height: '20px',marginRight:'4px'}}
                 
                />
                <span className='fort'>Computing</span>
              </Link>
              <Link  className='outline'>
                <img
                  src="/babyprod.png"
                  style={{height: '20px',marginRight:'4px'}}
                 
                />
                <span className='fort'>Baby Products</span>
              </Link>
              <Link  className='outline'>
                <img
                  src="/gaming.png"
                  style={{height: '20px',marginRight:'4px'}}
                 
                />
                <span className='fort'>Gaming</span>
              </Link>
              <Link  className='outline'>
                <span className='fort'>Musical Instrument</span>
              </Link>
              <Link  className='outline'>
                <img
                  src="/categories.png"
                  style={{height: '20px',marginRight:'4px'}}
                 
                />
                <span className='fort'>Other Categories</span>
              </Link>
            </div>
          </div>
          <div className='display'>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide jfk"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner cbi">
              <div className="carousel-item active">
                <img className="xyz" src="/flash sales.jpg" />
              </div>
              <div className="carousel-item">
                <img
                  className="xyz"
                  src="/carouseltwo.gif"
                  
                />
              </div>
              <div className="carousel-item">
                <img className="xyz" src="/carouselthree.gif" />
              </div>
              <div className="carousel-item">
                <img className="xyz" src="/decslide.jpg" />
              </div>
              <div className="carousel-item">
                <img className="xyz" src="/defacto.jpg" />
              </div>
              <div className="carousel-item">
                <img className="xyz" src="/carouselfour.gif" />
              </div>
            </div>
          </div>
          </div>
          <div className='cards'>
            <div className='cut'>
              <Link className="line" >
                <img
                  src="/phone-icon.png"
                  style={{height: '20px', position: 'absolute', top: '7px', left: '5px'}}
                />
                <p className="fork">CALL TO ORDER</p>
                <p className="fit">0700-600-0000</p>
              </Link>
              <Link className="line" >
                <img
                  src="/sell-icon.png"
                  style={{height: '20px', position: 'absolute'}}
                />
                <p className="fork">Sell on Jumia</p>
              </Link>
              <Link className="line" href="#">
                <img
                  src="/return-icon.png"
                  alt=""
                  style={{height: '20px', position: 'absolute'}}
                />
                <p className="fork">Best Deals</p>
              </Link>
            </div>
            <div className='pay'>
            <img src="/shop-earn.png" />
            </div>
          </div>
        </div>
        <div className='xxl'>
        <section className='cardth1'>
          <div className='downward'>
          <Link  className='donb2'>
                <div className='lockd1'>
                <img src="/television.png"  className='imglock1' />
                </div>
                <p className='subtext'>TV & Audio Deals</p>
              </Link>
              <Link  className='donb2'>
                <div className='lockd1'>
                <img src="/new.gif"  className='imglock1' />
                </div>
                <p className='subtext'>New Arrival</p>
              </Link>
              <Link  className='donb2'>
                <div className='lockd1'>
                <img src="/clear.png"  className='imglock1' />
                </div>
                <p className='subtext'>Clearance Sale</p>
              </Link>
              <Link  className='donb2'>
                <div className='lockd1'>
                <img src="/applia.png"  className='imglock1' />
                </div>
                <p className='subtext'>Appliances Deals</p>
              </Link>
              <Link  className='donb2'>
                <div className='lockd1'>
                <img src="/fifty.gif"  className='imglock1' />
                </div>
                <p className='subtext'>Up to 50% off</p>
              </Link>
              <Link  className='donb2'>
                <div className='lockd1'>
                <img src="/phone.png"  className='imglock1' />
                </div>
                <p className='subtext'>Phones & Tablet Deals</p>
              </Link>
              <Link  className='donb2'>
                <div className='lockd1'>
                <img src="/special.png"  className='imglock1' />
                </div>
                <p className='subtext'>Special Offer</p>
              </Link>
          </div>
          
        </section>
       </div>
        <div className='xxl4'>
        <section className='cardoh'>
          <header className='disect' style={{backgroundColor:'red', color:'white'}}>
            <div className='testing'>
                <img src="/iconflash.png" className='flashsale' />
                <p className="size">Flash Sales</p>
            </div>
            <div className='yog'>
                <span className='fog'>Time Left:</span>
                <time className='ffs' dateTime='2024-08-14' id='demo'> 14h : 59m : 00s </time>
              </div>
            <div className='yoga'>
                <Link className='just1' >
                  SEE ALL
                  <img src="/arrow.svg" className='dirt' />
                </Link>
            </div>
          </header>
          <div className='bisect'>
            <div className='onward'>
              { products && products.length > 6 ? (
                 products.slice(0,6).map((product)=> ( 
                  <div key={product._id} className='tfu'>
                     <Link to={`/products/${product._id}`} className='dond' onClick={() => window.scrollTo(0, 0)}>
                       <img src={product.images[0]} alt={product.name} className='iimg' />
                       <div>
                        <p className='cdtxt'>{product.name}</p>
                        <p className='cdamt'>&#8358;{product.salesprice.toLocaleString()}</p>
                        <p className='cdnt'>&#8358;{product.initialprice.toLocaleString()}</p>
                       </div>
                     </Link>
                  </div>
                ))
              ) : (
                <p>Loading Products....</p>
              )     
             
            }
             
            </div>
          </div>
        </section>
       </div>
        <section className='xxl1'>
        <div
          className='webgif'
          style={{
            display: 'flex',
            backgroundColor: 'white',
            alignContent: 'center',
            padding: '5px',
            justifyContent: 'space-between'
          }}>
          <div>
            <Link > <img src="/chilling-ac.gif"  /> </Link>
          </div>
          <div>
            <Link > <img src="/cooking-web.gif"/> </Link>
          </div>
          <div>
            <Link > <img src="/cooling-web.gif"/> </Link>
          </div>
        </div>
        </section>
       <div className='xxl'>
        <section className='cardoh'>
          <header className='disect' style={{backgroundColor:'#276076', color:'white'}}>
            <div className="d-flex align-items-center">
                <p className="size">Limited Stock Deals</p>
            </div>
            <div className='yoga'>
                <a className="just1" href="#">
                  SEE ALL
                  <img src="/arrow.svg" className='dirt' />
                </a>
            </div>
          </header>
          <div className='bisect'>
            <div className='onward'>
            { products && products.length > 6 ? (
                 products.slice(6, 12).map((product)=> ( 
                  <div key={product._id} className='tfu'>
                     <Link to={`/products/${product._id}`} className='dond'>
                       <img src={product.images[0]} alt={product.name} className='iimg' />
                       <div>
                        <p className='cdtxt'>{product.name}</p>
                        <p className='cdamt'>&#8358;{product.salesprice.toLocaleString()}</p>
                        <p className='cdnt'>&#8358;{product.initialprice.toLocaleString()}</p>
                       </div>
                     </Link>
                  </div>
                ))
              ) : (
                <p>Loading Products....</p>
              )     
             
            }
            </div>
          </div>
        </section>
       </div>
       <section className='xxl2'>
        <div
          className='webgif1'
          style={{
            display: 'flex',
            backgroundColor: 'white',
            alignContent: 'center',
            padding: '5px',
            justifyContent: 'space-between'
          }}>
          <div>
            <Link > <img src="/dbanner1.png"  /> </Link>
          </div>
          <div>
            <Link> <img src="/dbanner2.png"/> </Link>
          </div>
        </div>
        </section>
       <div className='xxl'>
        <section className='cardth'>
          <header className='disect1' style={{backgroundColor:'#FF550C', color:'white'}}>
            <div className='mx-auto'>
              <p className='size'>Appliances Deals</p>
            </div>
          </header>
          <div className='eject'>
            <div className='downward'>
              {appsection.map((section)=> (
                <div key={section.id}>
                  <Link to={`/section/${section.id}`} className='donb5'>
                    <div className='lockd'>
                    <img src={section.image} alt={section.name} className='imglock' />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
       </div>
       </>
       )}
      </main>
    </>
  )
}

export default Content
