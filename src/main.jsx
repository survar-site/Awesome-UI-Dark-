import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AgencyWebsite from './AgencyWebsite.jsx';
import Navbar from './component/Navbar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AgencyWebsite />,
    element: <Navbar/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
