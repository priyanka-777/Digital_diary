import { FaPlusCircle } from 'react-icons/fa'
import { Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import Details from './screens/Details'
import Form from './screens/Form'
import Home from './screens/Home'
import Main from './screens/Main'
import Login from './screens/Login'
import Contact from './screens/contact'
import Register from './screens/Register'
import About from './screens/About'

function App() {
  return (
    <div>
      <Nav />
      <main className='container py-1'>
        <div
          className='position-absolute'
          style={{ bottom: '20px', right: '20px', zIndex: 1000 }}
        >
          <Link to='/diary/form'>
            <FaPlusCircle className='fs-1' />
          </Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Main />} />
        
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='contact' element={<Contact />} />
          <Route path='diary/form' element={<Form />} />
          <Route path='about' element={<About />} />
          <Route path='diary/form/:id' element={<Form />} />
          <Route path='diary/details/:id' element={<Details />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
