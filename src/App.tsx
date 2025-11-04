import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import TabDetails from './Pages/TabDetails'
import SchemeDetails from './Pages/SchemeDetails'
import Contactus from './Components/Contactus'
import Book from './Pages/Book'
import Beneficiaries from './Pages/Beneficiaries'
import Circulars from './Pages/Circulars'
import Gallery from './Pages/Gallery'
import News from './Pages/News'

function App() {
  return (
    <Router>
      {/* Header and Footer should be outside Routes */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tab/:id" element={<TabDetails />} />
        <Route path="/scheme/:title" element={<SchemeDetails />} />
        <Route path="/Contact" element={<Contactus />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Beneficiaries" element={<Beneficiaries />} />
        <Route path="/Circulars" element={<Circulars />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/News" element={<News />} />


      </Routes>

      <Footer />
    </Router>
  )
}

export default App
