import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCards } from "../services/TarotService";
import fondo from "../assets/img/fondo.jpg"
import { Link } from "react-router-dom";
import Card from "../components/Card";


const Home = () => {
    // ESTADOS: cartas, cargando, error
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Para navegar a /card/:id al hacer click
    const navigate = useNavigate();

    useEffect(() => {
        // Hacemos la perticion al servidor Api
        const fetchData = async () => {
            try {
                setLoading(true);
                const CardData = await getAllCards();
                console.log("Cartas recibidas dese la Api", CardData);
                setCards(CardData);
                setError(null);

            } catch (error) {
                console.error("Error:", error);
                setError("Error cargando las cartas");

            } finally {
                setLoading(false)
            }
        };
        fetchData();

    }, []);

//     useEffect(() => {
// //   Activa el efecto parallax solo en Home
//   document.body.classList.add("bg-fixed");    // Tailwind: background-attachment: fixed

//   return () => {
//     // Al salir de Home, vuelve al comportamiento normal
//     document.body.classList.remove("bg-fixed");
//   };
// }, []);

    // 5) Al hacer click en una carta → vamos a /card/:id
    const handleCardClick = (card) => {
        navigate(`/card/${card.id}`);
    };

    

    return (
        <>
              <main className="relative min-h-screen">
                {/* 1) IMAGEN DE FONDO (ocupa toda la pantalla) */}
                 {/* <img
                    src={fondo}
                    alt="Mesa esotérica con velas"
                    // className="w-full h-[100svh] object-cover block select-none lg:h-auto lg:object-contain"
                    
                    
                ></img>  */}

                  <div className="absolute inset-x-0 top-4 px-4 flex justify-center z-10">
                    {/* Contenedor centrado con ancho máximo para que el grid no se desparrame */}
                    <div className="w-full max-w-6xl">
                        {/* ESTADO: Cargando */}
                        {loading && (
                            <div className="w-full py-6 flex items-center justify-center">
                                <p className="text-emerald-100/80">Cargando cartas…</p>
                            </div>
                        )}

                        {/* ESTADO: Error */}
                        {error && (
                            <div className="w-full py-6 flex items-center justify-center">
                                <p className="text-red-300">{error}</p>
                            </div>
                        )}
                            <div>
                                <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold text-naranja-oscuro font-playfair drop-shadow-lg mt-20 mb-2">EL VIAJE A TRAVÉS DEL TAROT</h1>
                                <p className="text-xs md:text-m lg:text-xl text-center text-naranja-oscuro font-lora mb-2">Haz click en cualquier carta para ver su detalle</p>
                            </div>
                        {/* GRID de cartas (solo cuando ya cargó y no hay error) */}
                        {!loading && !error && (
                            <div className="grid gad-1 md:gap-2 lg:gap-2.5 mb-24 md:mb-28 lg:mb-32 justify-center grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7">
                                {cards.map((card) => {
                                    return (
                                        // Envolvemos tu Card para poder escalarla sin tocar tu componente
                                        <div key={card.id} className="scale-90 md:scale-100">
                                            <Card
                                                card={card}
                                                onClick={handleCardClick}  // al click navega a /card/:id
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            


            </main>

                        


        </>


    )
}
export default Home;