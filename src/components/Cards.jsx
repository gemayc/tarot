// import { useState, useEffect } from "react";
// import { getAllCards } from "../services/TarotService";
// import Card from "./Card";
// import CardDetaill from "./CardDetaill";


// const Cards = () => {
//     const [cards, setCards] = useState ([]);// Guardamos todas las cartas que vienen de la api
//     const [selectedCard, setSelectedCard] = useState (null); //carta elegida
//     const [loading, setLoading] = useState (true);
//     const [error, setError] = useState (null);

//     useEffect ( () => {
//         // Hacemos la perticion al servidor Api
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const CardData = await getAllCards();
//                 console.log ("Cartas recibidas dese la Api", CardData);
//                 setCards (CardData);
//                 setError(null);

//             } catch (error) {
//                 console.error ("Error:" , error);
//                 setError ("Error cargando las cartas");

//             } finally {
//                 setLoading (false)
//             }
//         };
//         fetchData ();

//     }, []);

//      if (loading) {
//     return (
//       <div className="w-full py-16 flex items-center justify-center">
//         <p className="text-emerald-100/80">Cargando cartas...</p>
//       </div>
//     );
//   }
//   if (error) {
//     return (
//       <div className="w-full py-16 flex items-center justify-center">
//         <p className="text-red-300">{error}</p>
//       </div>
//     );
//   }
//   // Si hay una seleccionada → Detalle
//   if (selectedCard) {
//     return <CardDetaill card={selectedCard} onClose={() => setSelectedCard(null)} />;
//   }

//     // Si no, la mesa con 22 cartas (sin caja opaca, para ver el fondo)
//   return (
//     <div className="w-full">
//       <div className="grid gap-3 md:gap-4 justify-center grid-cols-4 sm:grid-cols-6 md:grid-cols-7">
//         {cards.map((card) => (
//           <Card key={card.id} card={card} onClick={setSelectedCard} />
//         ))}
//       </div>
//     </div>
//   );

    

    

// };

// export default Cards;