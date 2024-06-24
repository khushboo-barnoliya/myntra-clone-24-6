
import Navbar from "./navbar"
import "./css/App.css";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

function Home() {



  return (
    <>
      <div className="container-fluid p-0">
        <ToastContainer
          theme="light"
          closeOnClick
          pauseOnHover
        />

        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Home
