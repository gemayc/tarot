import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { describe, expect, beforeEach, test } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("footer", () => { //El beforeEach se pone cuando vamos hacer mas de un test asi y se mete dentro de esa funcion y se tiene que poner asi.
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Footer/>
			</MemoryRouter>
		);
	});


    test("muestra el footer con su texto", () => {
        const footer = screen.getByRole("contentinfo")
        expect(footer).toBeDefined();

    })

    test("muestra una frase" , () => {
        const frase = screen.getByText(/Proyecto realizado por Gema Yébenes/i)
        expect(frase).toBeDefined();

    })
})