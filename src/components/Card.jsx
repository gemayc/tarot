import React from "react";
import cardBack from "../assets/img/card.jpg"

const Card = ({ card, onClick }) => {
    return (
        <>
            <button
                type="button"
                onClick={() => onClick(card)}
                className="relative block w-24 sm:w-28 md:w-40
    aspect-[3/5] overflow-hidden
    shadow-lg shadow-black/40
    ring-1 ring-emerald-900/40
    hover:scale-105 transition-transform duration-200
    focus:outline-none rounded-xl">
                <img src={cardBack} alt="dorso" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <span className=" absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] md:text-[12px] font-semibold font-lora tracking-wide text-naranja-oscuro rounded-full px-2 py-0.5 border-3 border-marron-oscuro whitespace-nowrap shadow-md bg-verde-oscuro">
                    {card.arcaneName}
                </span>

            </button>

        </>
    )

}

export default Card;