import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider ,createBrowserRouter , createRoutesFromElements } from 'react-router-dom'
import Layou from './pages/Layou'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layou/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
