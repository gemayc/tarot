import { render, screen } from "@testing-library/react";
import CardDetail from "../pages/CardDetail";
import { describe, expect, beforeEach, test } from "vitest";
import { MemoryRouter } from "react-router-dom"; 

vi.mock("../services/TarotService", () => ({
  getCardById: vi.fn(async () => ({
    id: "1",
    arcaneName: "La Sacerdotisa",
    arcaneDescription: "Texto de prueba del arcano.",
    arcaneImage: { imageSrc: "https://example.com/arcano.jpg" },
    goddessName: "Hécate",
    goddessDescription: "Descripción de la diosa.",
    goddessImage: { imageSrc: "https://example.com/diosa.jpg" },
  })),
})); //Mockeamos el servicio getCardById para que siempre devuelva datos de prueba. Así el test no depende de internet ni de tu API.
//esto hay que hacerlo por CardDetail tiene la llamada getCardBYid

describe ("CardDetail", () => {
    beforeEach (() =>{
        render(
            <MemoryRouter>
				<CardDetail/>
			</MemoryRouter>
        );
    });

    test('muestra link Hacer lectura de Tarot', () => {
        const linkLectura = screen.findByRole("link", {name:/Hacer lectura de Tarot/i})
        expect(linkLectura).toBeDefined()
    })

    test ('muestra el boton Volver al mazo' , () => {
        const buttonVolver = screen.findByRole("button" , {name:/Volver al mazo/i})
        expect(buttonVolver).toBeDefined()
    })

})
