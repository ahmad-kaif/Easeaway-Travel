import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Packages from './components/home/Packages.jsx'
import Package from './components/home/Package.jsx'
import Corporate from './components/home/Corporate.jsx'
import GlobalVacation from './components/home/globalVacation/GlobalVacation.jsx'
import IndianPackage from './components/home/indianPackages/IndianPackage.jsx'
import BikeTrips from './components/home/bikePackages/BikeTrips.jsx'
import HoneymoonPackage from './components/home/honeymoonPackages/HoneymoonPackage.jsx'
import CommunityPackage from './components/home/communityPackage/CommunityPackage.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "packages",
        element: <Packages/>
      },
      {
        path: "package/:id",
        element: <Package/>
      },
      {
        path: "package/globalPackage",
        element: <GlobalVacation/>
      },
      {
        path: "package/bikeTrips",
        element: <BikeTrips/>
      },
      {
        path: "package/indianPackage",
        element: <IndianPackage/>
      },
      {
        path: "package/honeymoonPackage",
        element: <HoneymoonPackage/>
      },
      {
        path: "package/communityPackage",
        element: <CommunityPackage/>
      },
      {
        path: "corporateTours",
        element: <Corporate/>
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
