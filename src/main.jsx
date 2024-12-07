import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contacts from './pages/Contacts.jsx';  
import Resume from './pages/Resume.jsx';

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
      },
      {
        element: <Contacts />,
        path: "/contacts"
      },
      {
        element: <Resume />,
        path: "/resume"
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} ></RouterProvider>
)
