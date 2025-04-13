import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./Layout/Rootlayout.jsx"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Services from "./Pages/Services.jsx"
import ProjectLayout from "./Layout/ProjectsLayout.jsx"
import Projects from "./Pages/Projects.jsx"
import Factory from "./Pages/Factory.jsx"
import Gear from "./Pages/Gear.jsx"
import Aircarft from "./Pages/Aircraft.jsx"
import Car from "./Pages/Car.jsx"
import Machinery from "./Pages/Machinery.jsx"
import Petrochemical from "./Pages/Petrochemical.jsx"
import Weilding from "./Pages/Weilding.jsx"
import Laser from "./Pages/Laser.jsx"
import Blog from "./Pages/Blog.jsx"
import FAQ from "./Pages/Faq.jsx"
import Shop from "./Pages/Shop.jsx"
import Air from "./Pages/Air.jsx"
import Gas from "./Pages/Gas.jsx"
import Theodolite from "./Pages/Theodolite.jsx"
import Road from "./Pages/Road.jsx"
import Anoized from "./Pages/Anoized.jsx"
import Electric from "./Pages/Electric.jsx"
import Industrial from "./Pages/Industrial.jsx"
import Turbine from "./Pages/Turbine.jsx"
import ShopLayout from "./Layout/ShopLayout.jsx"
import Cart from "./Pages/Cart.jsx"
import Contact from "./Pages/Contact.jsx"
import Account from "./Pages/Account.jsx"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<RootLayout/>}>

    <Route
      index
      element={<Home/>}
    />

    <Route
    path="about"
    element={<About/>}
    />

    <Route
      path="services"
      element={<Services/>}
    />

    <Route path="projects" element={<ProjectLayout/>}>
      <Route
      index
      element={<Projects/>}
      />

      <Route
      path="factory"
      element={<Factory/>}
      />

      <Route
      path="gear"
      element={<Gear/>}
      />

      <Route
      path="aircraft"
      element={<Aircarft/>}
      />

      <Route
      path="car"
      element={<Car/>}
      />

      <Route
      path="machinery"
      element={<Machinery/>}
      />

      <Route
      path="petrochemical"
      element={<Petrochemical/>}
      />

      <Route
      path="weilding"
      element={<Weilding/>}
      />

      <Route
      path="laser"
      element={<Laser/>}
      />

      
    </Route>


      <Route
      path="blog"
      element={<Blog/>}
      />

      <Route
      path="faq"
      element={<FAQ/>}
      />

      <Route path="shop" element={<ShopLayout/>}>

        <Route
        index
        element={<Shop/>}
        />
      
        <Route
        path="anoized"
        element={<Anoized/>}
        />

      <Route
        path="electric"
        element={<Electric/>}
        />

      <Route
        path="gas"
        element={<Gas/>}
        />

      <Route
        path="air"
        element={<Air/>}
        />

      <Route
        path="industrial"
        element={<Industrial/>}
        />

      <Route
        path="turbine"
        element={<Turbine/>}
        />

      <Route
        path="road"
        element={<Road/>}
        />

      <Route
        path="theodolite"
        element={<Theodolite/>}
        />
      </Route>

      <Route
      path="cart"
      element={<Cart/>}
      />

      <Route
      path="contact"
      element={<Contact/>}
      />

      <Route
      path="account"
      element={<Account/>}
      />

  </Route>

  ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
