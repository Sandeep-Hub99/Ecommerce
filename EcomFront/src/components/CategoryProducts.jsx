import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const CategoryProducts = () => {
  return (
    <div div className='container mt-4'>
        {/* Latest Products */}
        <h3 className='mb-4'><span className='text-danger'>Python</span> Products</h3>
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
    </div>
  )
}

export default CategoryProducts