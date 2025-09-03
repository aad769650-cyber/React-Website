import { Outlet } from "react-router"
import { Navbar } from "../component/Navbar"
import { Footer } from "../component/Footer"

export const AppLayout=()=>{


    return(
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}