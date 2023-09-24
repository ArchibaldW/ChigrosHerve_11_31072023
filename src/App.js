import Navbar from './components/navbar'
import Router from './pages/router'
import Footer from './components/footer'

import './main.scss'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router />
      <Footer />
    </div>
  )
}
