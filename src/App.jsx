import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import ItemDetail from './pages/ItemDetail';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {

  return (
  <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/itemDetail/:productId' element={<ItemDetail />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )
}

export default App
