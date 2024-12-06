import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <About />,
        path: "/"
      },
      {
        element: <Portfolio />,
        path: "/portfolio"
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} ></RouterProvider>
)
