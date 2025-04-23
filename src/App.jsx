import { Toaster } from 'react-hot-toast'
import Register from './Component/Register'
import {Routes , Route } from "react-router-dom"
import Loggin from './Component/Loggin'
import Home from './Component/Home'
import Button from './Component/Button'


function App() {
 

  return (
   
   <>
   <Toaster position='top-right' toastOptions={{duration : 3000}}/>
   <Routes>
   <Route path = '/register' element = {<Register />}/>
   <Route path = '/loggin' element = {<Loggin />}/>
   <Route path = '/Home' element = {<Home />}/>
   <Route path = '/' element = {<Button/>}/>
   </Routes>
  
   
   
   
   
   </>
  )
}

export default App
