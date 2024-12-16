
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Appointment } from './Pages/Appointment'
import { About } from './Pages/About'
import { Register } from './Pages/Register'
import { Login } from './Pages/Login'
import { Navbar } from './Components/Navbar'

function App() {

  const {isAuthenticated,setIsAuthenticted,setUser}=useConte

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App