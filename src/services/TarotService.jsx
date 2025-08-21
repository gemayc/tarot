import axios from "axios";
 
const API_BASE = import.meta.env.VITE_API_URL; // esto se pone asi porque voy a subirlo a vercel viene del archivo.env.local

//funcion para obtener las cartas

export const getAllCards = async () => {
 try {
    const response = await axios.get (API_BASE);
    return response.data; // devolvemos los datos de la api
    
 } catch (error){
    console.log(`Error al obtener cartas:  ${error}`);
    return [];
   
 }
    
};

export const getCardById = async (id) => {
    try{
        const response = await axios.get (`${API_BASE}/${id}`);
        return response.data;

    } catch (error) {
        console.log(`Error al obtener carta con id ${error}`)
        return null;

    }
};