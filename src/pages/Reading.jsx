// PAGINA PARA LEER LAS CARTAS PRESENTE  PASADO FUTURO
import React, { useEffect, useState } from "react";
import { getAllCards } from "../services/TarotService";
import Card from "../components/Card";

const Reading = () => {
    //Estados que necesitamos aqui guardamos la informacion
    const [allCards, setAllCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState({
        pasado: null,
        presente: null,
        futuro: null
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentStep, setCurrentStep] = useState('pasado'); // setcurrentstep en que posicion estamos ahora
    const selectedCount = Object.values(selectedCards).filter(Boolean).length;

    useEffect(() => {
        const fecthCards = async () => {
            try {
                setLoading(true);//empiezo a cargar las cartas
                const cardData = await getAllCards(); // se las pedimos al servidor
                setAllCards(cardData);// las guardamo
                console.log("Cartas cargadas:", cardData?.length);
                setError(null);
            } catch (error) {
                console.error("Error al cargar las cartas");
                setError("Error cargando las cartas");

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
            setCurrentStep('futuro');
        } else if (currentStep === 'futuro') {
            setCurrentStep('futuro');
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
            selectedCards.futuro?.id === card.id;
    };

    //HACEMOS UNA FUNCION PARA DAR UN MENSAJE AL USUARIO E IR DIRIJIENDO LO QUE TIENE QUE SELECIONAR
    const getInstructionMessage = () => {
        if (selectedCount === 3) {
            return "¡Lectura completada! Aquí tienes tu interpretación";
        }
        switch (currentStep) {
            case 'pasado':
                return "Selecciona una carta para representar tu PASADO";
            case 'presente':
                return "Selecciona una carta para representar tu PRESENTE";
            case 'futuro':
                return "Selecciona una carta para representar tu FUTURO";
            default:
                return "";
            
        }
    };

    if (loading) {
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
                <div className="max-w-6xl mx-auto">
                    {/* TITULO E INSTRUCCIONES  */}
                    <div className="text-center mb-6">
                        <h1 className="text-l md:text-3xl text-center font-bold text-naranja-oscuro font-playfair drop-shadow-lg mt-4 mb-2" >LECTURA DEL TAROT</h1>
                        <p className="text-lg text-naranja-oscuro font-lora mt-4 mb-4">{getInstructionMessage()}</p>
                        {/* Botón de reiniciar (solo si ya empezamos a seleccionar) */}
                        {(selectedCards.pasado || selectedCards.presente || selectedCards.futuro) && (
                            <button
                                onClick={resetReading}
                                className="rounded-xl px-3 py-1.5 ring-1 bg-verde-oscuro text-naranja-oscuro hover:scale-105 transition text-sm md:text-base"> Reinciar Lectura</button>
                        )}
                    </div>
                    {/* 🃏 MOSTRAR LAS CARTAS SELECCIONADAS (ojo aqui cambie === por !==) */}
                    {currentStep !== 'terminado' && (
                        <div className="mb-8">
                        
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                {/* PASADO */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold font-playfair text-naranja-oscuro mb-2">PASADO</h3>
                                    {selectedCards.pasado && (
                                        <div className="bg-emerald-950/40 rounded-xl p-4 h-[400px] flex flex-col">
                                            <div className="mx-auto w-32 aspect-[3/5] mb-3">
                                            {/* imagen */}
                                                <div className="mx-auto w-32 aspect-[3/5] mb-3">
                                                    <img
                                                        src={selectedCards.pasado.arcaneImage.imageSrc}
                                                        alt={selectedCards.pasado.arcaneName}
                                                        className="w-full h-full object-cover rounded-lg" />
                                                </div>
                                            </div>
                                            <h4 className="text-base md:text-lg font-playfair font-semibold text-emerald-100/90 mb-1">{selectedCards.pasado.arcaneName}</h4>
                                            <p className="text-sm md:text-base font-lora leading-relaxed text-emerald-100/80 whitespace-pre-line overflow-y-auto pr-1 flex-1">{selectedCards.pasado.arcaneDescription}</p>

                                        </div>
                                    )}

                                </div>
                                {/* PRESENTE */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold font-playfair text-naranja-oscuro mb-2">PRESENTE</h3>
                                    {selectedCards.presente && (
                                        <div className="bg-emerald-950/40 rounded-xl p-4 h-[400px] flex flex-col">
                                            <div className="mx-auto w-32 aspect-[3/5] mb-3">
                                            {/* imagen */}
                                                <div className="mx-auto w-32 aspect-[3/5] mb-3">
                                                    <img
                                                        src={selectedCards.presente.arcaneImage.imageSrc}
                                                        alt={selectedCards.presente.arcaneName}
                                                        className="w-full h-full object-cover rounded-lg" />
                                                </div>
                                            </div>
                                            <h4 className="text-base md:text-lg font-playfair font-semibold text-emerald-100/90 mb-1">{selectedCards.presente.arcaneName}</h4>
                                            <p className="text-sm md:text-base font-lora leading-relaxed text-emerald-100/80 whitespace-pre-line overflow-y-auto pr-1 flex-1">{selectedCards.presente.arcaneDescription}</p>

                                        </div>
                                    )}

                                </div>
                                {/* FUTURO */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold font-playfair text-naranja-oscuro mb-2">FUTURO</h3>
                                    {selectedCards.futuro && (
                                        <div className="bg-emerald-950/40 rounded-xl p-4 h-[400px] flex flex-col">
                                            <div className="mx-auto w-32 aspect-[3/5] mb-3">
                                            {/* Imagen */}
                                                <div className="mx-auto w-32 aspect-[3/5] mb-3">
                                                    <img
                                                        src={selectedCards.futuro.arcaneImage.imageSrc}
                                                        alt={selectedCards.futuro.arcaneName}
                                                        className="w-full h-full object-cover rounded-lg" />
                                                </div>
                                            </div>
                                            <h4 className="text-base md:text-lg font-playfair font-semibold text-emerald-100/90 mb-1">{selectedCards.futuro.arcaneName}</h4>
                                            <p className="text-sm md:text-base font-lora leading-relaxed text-emerald-100/80 whitespace-pre-line overflow-y-auto pr-1 flex-1">{selectedCards.futuro.arcaneDescription}</p>

                                        </div>
                                    )}

                                </div>

                            </div>

                        </div>

                        //  este cierre viene de aqui  {(selectedCards.pasado || selectedCards.presente || selectedCards.futuro) && (
                    )}

                    {/*  GRID DE CARTAS PARA SELECCIONAR */}
                    {currentStep !== 'terminado' && (
                        <div>
  <h3 className="text-center text-naranja-oscuro mb-4 font-lora">
    Haz click en una carta para seleccionarla
  </h3>

  <div className="grid gap-2 justify-center grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7">
    {allCards.map((card) => {
      const selected = isCardSelected(card);
      const disabled = selectedCount === 3 || selected; // bloquea si ya hay 3 o si esta carta ya fue elegida

      return (
        <div
          key={card.id}
          className={
            `scale-90 md:scale-100 transition-all ` +
            (disabled ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105 cursor-pointer')
          }
        >
          <Card
            card={card}
            onClick={disabled ? () => {} : handleCardSelection}
          />
        </div>
      );
    })}
  </div>
</div>
                    )}

                    {/* PROGRESO */}
                    <div className="mt-6 text-center">
                        <div className="flex justify-center gap-2 mb-2">
                            <div className={`w-3 h-3 rounded-full ${selectedCards.pasado ? 'bg-verde-oscuro' : 'bg-gray-300'}`}></div>
                            <div className={`w-3 h-3 rounded-full ${selectedCards.presente ? 'bg-verde-oscuro' : 'bg-gray-300'}`}></div>
                            <div className={`w-3 h-3 rounded-full ${selectedCards.futuro ? 'bg-verde-oscuro' : 'bg-gray-300'}`}></div>

                        </div>
                        <p className="text-sm text-naranja-oscuro font-lora">
                            {Object.values(selectedCards).filter(card => card !== null).length} / 3 cartas seleccionadas
                        </p>

                    </div>

                </div>



            </main>


        </>
    );
};

export default Reading;