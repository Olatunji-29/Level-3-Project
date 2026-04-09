import { StrictMode } from 'react'
import {createBrowserRouter} from 'react-router'
import {RouterProvider} from 'react-router/dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Landingpage from './pages/Landingpage.jsx'
import Signup from './pages/Signup.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

const router = createBrowserRouter([
  {path:'/', element: <Landingpage/>},
  {path:'/in', element: <Login/> },
  {path:'/dash', element: <App/> },
  {path:'/up', element: <Signup/> },
  {path:'/admin', element: <AdminDashboard/>}



])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
