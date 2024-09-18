import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PertanianBerkelanjutan from './pages/pertanianBerkelanjutan.jsx'
import PotensiPertanian from './pages/potensiPertanian.jsx'
import PlatformP5 from './pages/platformP5.jsx'
import Home from './pages/home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pertanian-berkelanjutan',
    element: <PertanianBerkelanjutan />,
  },
  {
    path: '/potensi-pertanian',
    element: <PotensiPertanian />,
  },
  {
    path: '/platform-p5',
    element: <PlatformP5 />,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
