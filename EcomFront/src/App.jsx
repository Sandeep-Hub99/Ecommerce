import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>} />
          {/* <Route path='/Customers' element={<Customers/>} /> */}
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

