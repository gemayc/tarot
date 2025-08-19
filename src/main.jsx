import { StrictMode } from 'react'      //StrictMode es buena práctica y te ayuda a escribir mejor código en React.                                                           
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom' //RouterProvider es la forma moderna de trabajar con rutas si usas react-router-dom v6.4+.
import routerTarot from './router/Router'//Separar la lógica de rutas en routerTarot hace tu código más limpio y modular.


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerTarot}/>
  </StrictMode>
)
