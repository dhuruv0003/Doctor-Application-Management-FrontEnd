
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Appointment } from './Pages/Appointment'
import { About } from './Pages/About'
import { Register } from './Pages/Register'
import { Login } from './Pages/Login'
import { Navbar } from './Components/Navbar'
import { useContext, useEffect } from 'react'
import { AppContext } from './Context/AppContext'

function App() {

  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(AppContext);
  //fetch the User

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/user/patient/me', {
          withCredentials: true
        })
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser([]);
      }
    }
    fetchUser();
  }, [isAuthenticated])

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