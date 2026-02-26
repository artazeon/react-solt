import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About'
import Categories from './pages/Categories'
import Services from './pages/Services'
import Specialists from './pages/Specialists/Specialists'
import Blog from './pages/Blog'

function App() {
  return (
    <BrowserRouter basename='/react-solt'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/services' element={<Services />} />
        <Route path='/specialists' element={<Specialists />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
