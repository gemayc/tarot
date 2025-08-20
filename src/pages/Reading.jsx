// PAGINA PARA LEER LAS CARTAS PRESENTE  PASADO FUTURO
import React,{useEffect, useState} from "react";
import {getAllCards} from "../services/TarotService";
import Card from "../components/Card";

const Reading = () => {
    //Estados que necesitamos aqui guardamos la informacion
    const [allCards, setAllCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState({
        pasado: null,
        presente:null,
        futuro: null
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentStep, setCurrentStep] = useState('pasado'); // setcurrentstep en que posicion estamos ahora

    useEffect (() => {
        const fecthCards = async () => {
            try {
                setLoading(true);//empiezo a cargar las cartas
                const CardData = await getAllCards(); // se las pedimos al servidor
                setAllCards(CardData);// las guardamo
                setError(null);     
            } catch (error) {
                console.error ("Error al cargar las cartas");

            } finally {
                setLoading(false);
            }
        };
        fecthCards();
    }, []);
    //HACEMOS UNA FUNCION PARA SELECIONAR UNA CARTA
    const handleCardSelection = (card) => {
        //solo permitimos sellecionar si aun no hemos terminado
        if (currentStep === 'terminado') return;
        //Ahora guardamos la carta en la posicion actual con setSelectedCards
        setSelectedCards(prev => ({ // prev siginifica dame el estado anterior ejemplo carta pasado
            ...prev, // este son los puntos significa traeme todo lo anterior
            [currentStep]: card // pero cambia esta poisicion especifica
        }));

        if (currentStep === 'pasado') {
            setCurrentStep('presente');
        } else if (currentStep === 'presente') {
            setCurrentStep ('futuro');
        } else if (currentStep === 'futuro') {
            setCurrentStep ('terminado');
        }

        };

        // HACEMOS UNA FUNCION PARA REINICIAR LA LA LECTURA: quiere decir si hay ninguna carta elegida vuelve al principio elegiendo la priemra el pasado
         const resetReading = () => {
            setSelectedCards({
                pasado: null,
                presente: null,
                futuro: null

            });
            setCurrentStep('pasado');
         };

         // HACEMOS FUNCION PARA VERIFICAR SI UNA CARTA YA FUE ELEGIDA
         const isCardSelected = (card) => {
            return selectedCards.pasado?.id === card.id ||
                   selectedCards.presente?.id === card.id ||
                   selectedCards.futuro.id === card.id;
         };
        
         //HACEMOS UNA FUNCION PARA DAR UN MENSAJE AL USUARIO E IR DIRIJIENDO LO QUE TIENE QUE SELECIONAR
          const getInstructionMessage = () => {
            switch (currentStep) {
                case 'pasado' :
                    return "Seleciona una carta para respresentar tu PASADO";
                case 'presente' :
                    return "Selecciona una carta para representar tu PRESENTE";
                case 'futuro' :
                    return "Selecciona una carta para representar tu FUTURO";
                case 'terminado' :
                    return "!Lectura completada! Aquí tienes tu interpretación"
                default :
                 return ""
            }
          };

          if (loading){
             return (
            <main className="min-h-screen bg-black text-emerald-100 grid place-content-center">
                <p>Cargando cartas para la lectura...</p>
            </main>
        );

          };

           if (error) {
        return (
            <main className="min-h-screen text-emerald-100 grid place-content-center gap-4">
                <p className="text-red-300">{error}</p>
            </main>
        );
    };
    

    return (
        <>
        <main className="min-h-screen p-4">


        </main>
        
        
        </>
    )
}

export default Reading;