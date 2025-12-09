import { createRoot } from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from 'react-router'
import { router } from './Routes/Router'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
