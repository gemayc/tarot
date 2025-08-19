// import React from "react";

// const CardDetaill = ({ card, onClose }) => {

//     return (
//         <div className="w-full max-w-5xl mx-auto p-4 md:p-6">
//             {/* Cabecera con nombre y botón cerrar */}
//             <div className="mb-4 flex items-center justify-between">
//                 <h2 className="">{card.arcaneName}</h2>
//                 <button
//                     onClick={onClose}
//                     className="px-3 py-1.5 rounded-lg bg-emerald-700 text-emerald-50 hover:bg-emerald-600 transition-colors">Cerrar</button>
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
//                 {/* Carta Arcano */}
//                 <div className="aspect-[3/5] w-full rounded-2xl overflow-hidden bg-emerald-950 ring-1 ring-emerald-800 shadow-xl">
//                     <img
//                         src={card.arcaneImage.imageSrc}
//                         alt={card.arcaneName}
//                         className="h-full w-full object-cover" />
//                 </div>

//                 {/* Descripción del arcano */}
//                 <div className="rounded-2xl p-4 md:p-6 bg-emerald-950 ring-1 ring-emerald-800 shadow-xl text-emerald-100/90 leading-relaxed">
//                     <h3 className="text-lg font-semibold mb-2">Significado</h3>
//                     <p className="whitespace-pre-line">{card.arcaneDescription}</p>
//                 </div>
//                 {/* Imagen de la diosa */}
//                 <div className="aspect-[3/5] w-full rounded-2xl overflow-hidden bg-emerald-950 ring-1 ring-emerald-800 shadow-xl flex items-center justify-center">
//                     <img
//                         src={card.goddessImage.imageSrc}
//                         alt={card.goddessName || "Diosa asociada"}
//                         className="h-full w-full object-cover"
//                         loading="lazy" />


//                 </div>
//                 {/* Descripción de la diosa */}
//                 <div className="rounded-2xl p-4 md:p-6 bg-emerald-950 ring-1 ring-emerald-800 shadow-xl text-emerald-100/90 leading-relaxed">
//                     <h3 className="text-lg font-semibold mb-2">{card.goddessName}</h3>
//                     <p className="whitespace-pre-line">
//                         {card.goddessDescription}
//                     </p>
//                 </div>


//             </div>
//         </div>

//     )

// }

// export default CardDetaill;