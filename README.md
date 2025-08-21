# 🔮 El Viaje a través del Tarot

Aplicación web en React para explorar los **Arcanos Mayores** del Tarot: listado de cartas, **detalle** de cada arcano y **lectura de 3 cartas** (Pasado · Presente · Futuro).  
Proyecto desplegado en producción con **Vercel** y consumo de una **API pública**.

**Demo:** https://elviajedeltarot.vercel.app/

---

## ✨ Descripción

Una experiencia web sencilla y elegante para:
- Navegar por el mazo de Arcanos Mayores.
- Abrir el **detalle** de cada carta (imagen + descripción).
- Realizar una **lectura guiada** de 3 cartas (Pasado, Presente y Futuro).

La app está pensada para ser **responsive**, accesible con teclado y rápida (Vite + Tailwind, imágenes lazy, y fondo optimizado).

---

## ⚡ Características

- 🃏 **Grid de cartas** responsive con hover y estados (loading / error).
- 🔍 **Detalle** de carta con imagen y contenido.
- 🧭 **Lectura guiada** de 3 cartas (paso a paso, con indicador de progreso).
- ⌨️ **Accesibilidad**: navegación por teclado, foco visible, mensajes `aria-live`.
- 🌗 **Fondo global** con efecto fijo en *Home* y comportamiento personalizado en otras páginas.
- 🌐 **API pública** (MockAPI) consumida via **Axios**.
- 🧩 **Arquitectura** por páginas y componentes reutilizables.
- 🚀 **Despliegue continuo** con Vercel (cada push publica automáticamente).

---

## 🎨 Diseño

El diseño está basado en un prototipo de **Figma** (tipografías, composición y paleta coherentes con el tema del tarot).

> (Opcional) Puedes añadir capturas del prototipo si las guardas en  
> `src/assets/img-readme/` y enlazarlas aquí con `![](./src/assets/img-readme/1.png)`.

### 🎨 Paleta de colores (proyecto)

- **Verde muy oscuro** `#0E2F28`  
- **Verde medio** `#3B493A`  
- **Marrón oscuro** `#A46C28`  
- **Naranja oscuro** `#BF7E45`  
- **Naranja claro** `#F29C50`  
- **Amarillo** `#F2CB57`

### ✍️ Tipografías

- **Playfair Display** (títulos)  
- **Lora** (cuerpo de texto)

---

## 🛠️ Tech Stack

- **React + Vite**
- **React Router DOM**
- **Tailwind CSS**
- **Axios**
- **Node.js & npm**
- **Vercel** (deploy)
- **API pública (MockAPI)** para cartas del Tarot

---

## ⚙️ Instalación (local)

### 📋 Prerrequisitos
- Node.js **18+**
- npm

### 🔧 Setup

```bash
git clone https://github.com/gemayc/tarot.git
cd tarot
npm install
