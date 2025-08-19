import axios from "axios";
 
const API_BASE = "https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot"

export const getAllCards = async () => {
 try {
    const response = await axios.get (API_BASE);
    return response.data; // devolvemos los datos de la api
    
 } catch (error){
    console.log(`Error al obtener cartas:  ${error}`);
   
 }
    
};

export const getCardById = async (id) => {
    try{
        const response = axios.get (`${API_BASE}/${id}`);
        return response.data;

    } catch (error) {
        console.log(`Error al obtener carta con id ${error}`)

    }
};

