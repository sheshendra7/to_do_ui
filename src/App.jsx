import { useState } from 'react'
import './App.css'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import HomeComponent from './components/HomeComponent'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import RegisterComponent from './components/RegisterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <Header></Header> 
      </div>
      <div className='Home'>
        <HomeComponent></HomeComponent>
      </div>
      <div className="footer">
      <RegisterComponent/>
      </div>
      
      
      
    </>
  )
}

export default App
