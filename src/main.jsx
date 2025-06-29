import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router";
import AgencyWebsite from './AgencyWebsite.jsx';
import Navbar from './component/Navbar.jsx';
import LoginForm from './component/LoginForm.jsx'
import SignupForm from './component/SignupForm.jsx';
import About from './component/About.jsx';
import HowItWorks from './component/HowItWorks.jsx';
import Services from './component/Services.jsx';
import ErrorBoundary from './component/ErrorBoundary.jsx';
import ReactErrorBoundary from './component/ReactErrorBoundary.jsx';
import NotFound from './component/NotFound.jsx';

// Layout component that always shows navbar
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <AgencyWebsite />
      },
      {
        path: "LoginForm",
        element: <LoginForm />
      },
      {
        path: "SignupForm",
        element: <SignupForm />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "how-it-works",
        element: <HowItWorks />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactErrorBoundary>
      <RouterProvider router={router} />
    </ReactErrorBoundary>
  </StrictMode>
)
