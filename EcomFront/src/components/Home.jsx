import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className='mt-4'>
          <div className='container'>
            {/* Latest Products */}
            <h3 className='mb-4'>Latest Products<Link to='/products' className='float-end btn btn-dark'>View All Products<i className="fa-solid fa-arrow-right-long"></i></Link></h3>
            <div className='row mb-4'>
              {/* Card */}
              <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                  <img src={logo} className="center-block" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-primary">Price:Rs<span>500</span></h5>
                  </div>
                  <div className='card-footer'>
                    <button title="Add To Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title="Add To WishList" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-primary">Price:Rs<span>500</span></h5>
                  </div>
                  <div className='card-footer'>
                    <button title="Add To Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title="Add To WishList" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-primary">Price:Rs<span>500</span></h5>
                  </div>
                  <div className='card-footer'>
                    <button title="Add To Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title="Add To WishList" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-primary">Price:Rs<span>500</span></h5>
                  </div>
                  <div className='card-footer'>
                    <button title="Add To Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title="Add To WishList" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-primary">Price:Rs<span>500</span></h5>
                  </div>
                  <div className='card-footer'>
                    <button title="Add To Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title="Add To WishList" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-primary">Price:Rs<span>500</span></h5>
                  </div>
                  <div className='card-footer'>
                    <button title="Add To Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title="Add To WishList" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-primary">Price:Rs<span>500</span></h5>
                  </div>
                  <div className='card-footer'>
                    <button title="Add To Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title="Add To WishList" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-primary">Price:Rs<span>500</span></h5>
                  </div>
                  <div className='card-footer'>
                    <button title="Add To Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title="Add To WishList" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* Card */}
            </div>
            {/* EndLatest Products */}


            {/* Categories */}
            <h3 className='mb-4'>Popular Categories<Link to='/categories' className='float-end btn btn-dark'>View All Categories<i className="fa-solid fa-arrow-right-long"></i></Link></h3>
            <div className='row mb-4'>
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                    {/* <h5 className="card-title text-primary">Price:Rs<span>500</span></h5> */}
                  </div>
                  <div className='card-footer'>
                    Product Downloads: 2356
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                    {/* <h5 className="card-title text-primary">Price:Rs<span>500</span></h5> */}
                  </div>
                  <div className='card-footer'>
                    Product Downloads: 2356
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                    {/* <h5 className="card-title text-primary">Price:Rs<span>500</span></h5> */}
                  </div>
                  <div className='card-footer'>
                    Product Downloads: 2356
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                    {/* <h5 className="card-title text-primary">Price:Rs<span>500</span></h5> */}
                  </div>
                  <div className='card-footer'>
                    Product Downloads: 2356
                  </div>
                </div>
              </div>
              {/* Card */}
            </div>
            {/* Categories */}


            {/* Popular Products */}
            <h3 className='mb-4'>Latest Products<Link to='/products' className='float-end btn btn-dark'>View All Products<i className="fa-solid fa-arrow-right-long"></i></Link></h3>
            <div className='row mb-4'>
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-primary">Price:Rs<span>500</span></h5>
                  </div>
                  <div className='card-footer'>
                    <button title="Add To Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title="Add To WishList" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-primary">Price:Rs<span>500</span></h5>
                  </div>
                  <div className='card-footer'>
                    <button title="Add To Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title="Add To WishList" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-primary">Price:Rs<span>500</span></h5>
                  </div>
                  <div className='card-footer'>
                    <button title="Add To Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title="Add To WishList" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-primary">Price:Rs<span>500</span></h5>
                  </div>
                  <div className='card-footer'>
                    <button title="Add To Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title="Add To WishList" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* Card */}
            </div>
            {/* EndPopular Products */}


            {/* Seller */}
            <h3 className='mb-4'>Popular Sellers<a href='#' className='float-end btn btn-dark'>View All Sellers<i className="fa-solid fa-arrow-right-long"></i></a></h3>
            <div className='row mb-4'>
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                    {/* <h5 className="card-title text-primary">Price:Rs<span>500</span></h5> */}
                  </div>
                  <div className='card-footer'>
                    Categories: <a href='#'>Python</a>,<a href='#'>Java</a>
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                    {/* <h5 className="card-title text-primary">Price:Rs<span>500</span></h5> */}
                  </div>
                  <div className='card-footer'>
                    Categories: <a href='#'>Python</a>,<a href='#'>Java</a>
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                    {/* <h5 className="card-title text-primary">Price:Rs<span>500</span></h5> */}
                  </div>
                  <div className='card-footer'>
                    Categories: <a href='#'>Python</a>,<a href='#'>Java</a>
                  </div>
                </div>
              </div>
              {/* Card */}
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card"   >
                  <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                    {/* <h5 className="card-title text-primary">Price:Rs<span>500</span></h5> */}
                  </div>
                  <div className='card-footer'>
                    Categories: <a href='#'>Python</a>,<a href='#'>Java</a>
                  </div>
                </div>
              </div>
              {/* Card */}
            </div>
            {/* End Seller */}

            {/* Rating and Reviews*/}
            <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-secondary text-white p-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                      <figure className="text-center">
                          <blockquote className="blockquote">
                            <p>A well-known quote, contained in a blockquote element.</p>
                          </blockquote>
                          <figcaption className="blockquote-footer text-white">
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <cite title="Source Title">Customer Name</cite>
                          </figcaption>
                      </figure>
                  </div>
                  <div className="carousel-item">
                      <figure className="text-center">
                          <blockquote className="blockquote">
                            <p>A well-known quote, contained in a blockquote element.</p>
                          </blockquote>
                          <figcaption className="blockquote-footer text-white">
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <cite title="Source Title ">Customer Name</cite>
                          </figcaption>
                      </figure>
                  </div>
                  <div className="carousel-item">
                      <figure className="text-center">
                          <blockquote className="blockquote">
                            <p>A well-known quote, contained in a blockquote element.</p>
                          </blockquote>
                          <figcaption className="blockquote-footer text-white">
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <cite title="Source Title">Customer Name</cite>
                          </figcaption>
                      </figure>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/*End  */}
          </div>
        </main>
  )
}

export default Home