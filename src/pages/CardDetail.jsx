// COMPONENE PARA DETALLES DE LAS CARTAS
import React, { useEffect, useState } from "react";
import { getCardById } from "../services/TarotService";
// useParams: sirve para leer el "id" que viene en la URL (/card/7 -> id = "7")
// useNavigate: sirve para movernos a otra página (por ejemplo, volver atrás)
import { useParams, useNavigate } from "react-router-dom";
// import fondo from "../assets/img/fondo.jpg"
import { Link } from "react-router-dom";

const CardDetail = () => {
  // 1) Leemos el "id" que viene en la URL.
  const { id } = useParams();
  console.log("ID desde la URL:", id);
  // 2) Creamos navigate para poder volver atrás con un botón.
  const navigate = useNavigate();
  // 3) Creamos estados:
  //    - "card" guardará los datos de la carta (empieza como null porque aún no la tenemos).
  //    - "loading" (true/false) nos dirá si estamos cargando los datos.
  //    - "error" guardará un mensaje si algo sale mal (empieza en null = no hay error).
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect: es un efecto que se ejecuta cuando el componente se muestra por primera vez,
  //    y también cuando cambia "id". ¿Para qué? Para pedir la carta correcta según el id.

  useEffect(() => {
    const fetchCard = async () => {
      try {
        // Antes de pedir los datos, ponemos loading en true y borramos cualquier error anterior.
        setLoading(true);
        setError(null);

        // Llamamos al servicio y esperamos la carta
        const data = await getCardById(id);
        console.log("tarjtas encongradas", data)
        // Si no encontramos nada, ponemos un mensaje de error
        if (!data) {
          setError("No ha encontrado esa carta")
          setCard(null);
        } else {
          // Si todo va bien, guardamos la carta en el estado
          setCard(data);
          setError(null);

        }
      } catch (error) {
        // Si algo falla (por ejemplo, la API no responde),
        // mostramos un error para que el usuario lo vea.
        setError("Error cargando la carta");
        setCard(null)
      } finally {
        // Al final, tanto si va bien como si va mal, quitamos el "cargando"
        setLoading(false);
      }
    };

    // Llamamos a nuestra función para que haga el trabajo.
    fetchCard()
  }, [id]);//  Si cambia el "id" (otra carta), repetimos el proceso.

   useEffect(() => {
    // Al entrar en Reading → desactiva el fixed del body
    document.body.classList.add("no-fixed");
    return () => {
      // Al salir de Reading → devuelve el comportamiento global (fixed)
      document.body.classList.remove("no-fixed");
    };
  }, []);//esto lo hize porque la imagen de fondo se veia mal en el home y bien Reading y en CardDetail

  // 5) Mientras carga, enseñamos un mensajito simple
  if (loading) {
    return (
      <main className="min-h-screen bg-black text-emerald-100 grid place-content-center">
        <p>Cargando carta…</p>
      </main>
    );
  }

  // 6) Si hay error, lo mostramos y damos botón para volver atrás
  if (error) {
    return (
      <main className="min-h-screen text-emerald-100 grid place-content-center gap-4">

        <p className="text-red-300">{error}</p>
        <button
          onClick={() => navigate(-1)} // -1 significa "volver a la página anterior"
          className="px-3 py-1.5 rounded-xl ring-1 ring-emerald-900/40 hover:scale-105 transition"
        >
          ← Volver
        </button>
      </main>
    );
  }
  // hacemos constantes de toda la informacion que se va a imprimir 
  const title = card.arcaneName;
  const arcaneDescription = card.arcaneDescription;
  const arcaneImage = card.arcaneImage.imageSrc;

  const goddessName = card.goddessName;
  const goddessDesc = card.goddessDescription;
  const goddessImg = card.goddessImage.imageSrc;

  return (

    <>
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Contenedor de botones con flex → izquierda y derecha */}
          <div className="flex justify-between items-center mb-10 mt-8 md:mt-16 lg:mt-16 gap-2">
            {/* Botón a la izquierda */}
            <button
              onClick={() => navigate(-1)}
              className="rounded-xl px-3 py-1.5 ring-1 bg-verde-oscuro text-naranja-oscuro hover:scale-105 transition text-sm md:text-base"
            >
              Volver al mazo
            </button>
            {/* Link a la derecha */}
            <Link
              to="/reading"
              className="rounded-xl px-3 py-1.5 ring-1 bg-verde-oscuro text-naranja-oscuro hover:scale-105 transition text-sm md:text-base"
            >
              🔮 Hacer Lectura de Tarot
            </Link>
          </div>

          <h1 className="text-xl md:text-4xl lg:text-5xl font-playfair font-bold text-naranja-oscuro text-center mb-6 text-shadow-strong">
            {title}
          </h1>

          {/* Sección con flex → dos tarjetas dentro */}
          <section className="mt-6 flex flex-col md:flex-row  mb-24 md:mb-28 lg:mb-36 gap-6 justify-center items-start">

            {/* Tarjeta Tarot */}
            <div className="w-[300px] md:w-[600px] lg:w-[1500px] h-[70vh] mx-auto rounded-2xl p-4 bg-emerald-950/40 ring-1 ring-emerald-900/40 shadow-lg text-center flex flex-col">
              <h2 className="text-2xl font-playfair text-emerald-100/90 mb-3">Tarot</h2>
              <div className="mx-auto w-[120px] md:w-[150px] aspect-[3/5] overflow-hidden rounded-xl shadow ring-1 ring-emerald-900/40 mb-4">
                {arcaneImage ? (
                  <img
                    src={arcaneImage}
                    alt={card?.arcaneName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full grid place-content-center text-emerald-200/70">
                    Sin imagen
                  </div>
                )}
              </div>

              {/* Texto ocupa el resto y puede hacer scroll si es muy largo */}
              <h3 className="text-base md:text-lg font-playfair font-bold text-emerald-100/90 mb-1">
                Significado
              </h3>
              <p className="text-sm md:text-base font-lora leading-relaxed text-emerald-100/80 whitespace-pre-line overflow-y-auto pr-1 flex-1">
                {arcaneDescription}
              </p>
            </div>
            {/* Tarjeta Diosa */}
            <div className="w-[300px] md:w-[600px] lg:w-[1500px] h-[70vh] mx-auto rounded-2xl p-4 bg-emerald-950/40 ring-1 ring-emerald-900/40 shadow-lg text-center flex flex-col">
              <h2 className="text-2xl font-playfair text-emerald-100/90 mb-3">Diosa Contemporánea</h2>

              {/* Imagen de la Diosa */}
              <div className="mx-auto w-[120px] md:w-[150px] aspect-[3/5] overflow-hidden rounded-xl shadow ring-1 ring-emerald-900/40 mb-4">
                {goddessImg ? (
                  <img
                    src={goddessImg}
                    alt={goddessName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full grid place-content-center text-emerald-200/70">
                    Sin imagen
                  </div>
                )}
              </div>

              {/* Texto Diosa */}
              <h3 className="text-base md:text-lg font-playfair font-bold text-emerald-100/90 mb-1">
                {goddessName}
              </h3>
              <p className="text-sm md:text-base font-lora leading-relaxed text-emerald-100/80 whitespace-pre-line overflow-y-auto pr-1 flex-1">
                {goddessDesc}
              </p>
            </div>

          </section>
        </div>
      </main>


    </>
  )
}

export default CardDetail;
