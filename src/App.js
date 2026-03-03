import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About.jsx'
import Categories from './pages/Categories'
import Services from './pages/Services'
import Specialists from './pages/Specialists/index.jsx'
import SpecialistPage from './pages/SpecialistPage'
import Blog from './pages/Blog'
import Contacts from './pages/Contacts/Contacts.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

function App() {
  return (
    <BrowserRouter basename='/react-solt'>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/services' element={<Services />} />
        <Route path='/specialists' element={<Specialists />} />
        <Route path='/specialists/:id' element={<SpecialistPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
