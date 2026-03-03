import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About.jsx'
import Categories from './pages/Categories/Categories.jsx'
import CategoryDetail from './pages/Categories/CategoryDetail.jsx'
import Services from './pages/Services'
import Specialists from './pages/Specialists/Specialists.jsx'
import SpecialistPage from './pages/Specialists/SpecialistPage.jsx'
import Blog from './pages/Blog/Blog.jsx'
import BlogDetail from './pages/Blog/BlogDetail.jsx'
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
        <Route path='/categories/:id' element={<CategoryDetail />} />
        <Route path='/services' element={<Services />} />
        <Route path='/specialists' element={<Specialists />} />
        <Route path='/specialists/:id' element={<SpecialistPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
