import {Outlet} from "react-router-dom"
import NavBar from "../Components/Navbar.jsx"
import Banner from "../Components/Banner.jsx"
import Bottombar from "../Components/Bottombar.jsx"
export default function RootLayout(){

    return(
        <div>
            <Banner/>
            <NavBar/>
            <Outlet/>
            <Bottombar/>
        </div>
    )
}