import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import BookingModal from './components/BookingModal/BookingModal.jsx'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import About from './pages/About/About.jsx'
import Blog from './pages/Blog/Blog.jsx'
import BlogDetail from './pages/Blog/BlogDetail.jsx'
import Categories from './pages/Categories/Categories.jsx'
import CategoryDetail from './pages/Categories/CategoryDetail.jsx'
import Contacts from './pages/Contacts/Contacts.jsx'
import Home from './pages/Home/Home'
import ServiceDetail from './pages/Services/ServiceDetail.jsx'
import Services from './pages/Services/Services.jsx'
import SpecialistPage from './pages/Specialists/SpecialistPage.jsx'
import Specialists from './pages/Specialists/Specialists.jsx'
function App() {
  const [isBookingOpen, setBookingOpen] = useState(false)

  const openBooking = () => setBookingOpen(true)
  const closeBooking = () => setBookingOpen(false)
  return (
    // <BrowserRouter basename='/react-solt'>
    <BrowserRouter>
      <ScrollToTop />
      <Header onBookingClick={() => setBookingOpen(true)} />
      <Breadcrumbs />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:id' element={<CategoryDetail />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id' element={<ServiceDetail />} />
        <Route path='/specialists' element={<Specialists />} />
        <Route path='/specialists/:id' element={<SpecialistPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer onBookingClick={() => setBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </BrowserRouter>
  )
}

export default App
