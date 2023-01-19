import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


const Categories = () => {
  return (
    <section className='container'>
        <h3 className='my-4'>All Categories</h3>
            <div className='row mb-4'>
              {/* Card */}
              <div className='col-12 col-md-3 mb-2'>
                <div className="card">
                    <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                  <Link to='/category/python/1'style={{textDecoration: 'none', color: 'black'}}><h4 className="card-title">Category title</h4></Link>
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
                <div className="card">
                    <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                  <Link to='/category/java/1'style={{textDecoration: 'none', color: 'black'}}><h4 className="card-title">Category title</h4></Link>
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
                <div className="card">
                    <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                  <Link to='/'style={{textDecoration: 'none', color: 'black'}}><h4 className="card-title">Category title</h4></Link>
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
                <div className="card">
                    <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                  <Link to='/'style={{textDecoration: 'none', color: 'black'}}><h4 className="card-title">Category title</h4></Link>
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
                <div className="card">
                    <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                  <Link to='/'style={{textDecoration: 'none', color: 'black'}}><h4 className="card-title">Category title</h4></Link>
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
                <div className="card">
                    <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                  <Link to='/'style={{textDecoration: 'none', color: 'black'}}><h4 className="card-title">Category title</h4></Link>
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
                <div className="card">
                    <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                  <Link to='/'style={{textDecoration: 'none', color: 'black'}}><h4 className="card-title">Category title</h4></Link>
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
                <div className="card">
                    <img src={logo} className="center-block"   alt="..."/>
                  <div className="card-body">
                  <Link to='/'style={{textDecoration: 'none', color: 'black'}}><h4 className="card-title">Category title</h4></Link>
                    {/* <h5 className="card-title text-primary">Price:Rs<span>500</span></h5> */}
                  </div>
                  <div className='card-footer'>
                    Product Downloads: 2356
                  </div>
                </div>
              </div>
              {/* Card */}
            </div>
    </section>
  )
}

export default Categories