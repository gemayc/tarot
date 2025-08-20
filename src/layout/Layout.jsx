import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
// Outlet es un componente especial de React Router que actúa como un "contenedor dinámico".  
//Se usa cuando tienes rutas anidadas y quieres mostrar el contenido de las rutas hijas dentro de un layout común.
const Layout = () => {
    return (
        <>
        
        <NavBar/>
        
        <Outlet/> 
      
        <Footer/>
        
     
        
        
        </>
    )
}

export default Layout;