# Sistema de Consulta Estudiantil Modularizado

## Descripción

Este proyecto fue desarrollado en React + Vite utilizando Axios para consumir la API pública de Rick and Morty.

La aplicación permite consultar personajes según su especie utilizando un selector dinámico. Al cambiar la opción del select, se realiza una petición a la API y se muestran tarjetas con la información de los personajes.

---

## Tecnologías utilizadas

* React
* Vite
* Axios
* JavaScript
* CSS
* Git y GitHub

---

## Funcionalidades

* Consumo de API pública Rick and Morty
* Uso de Axios con instancia personalizada
* Modularización del proyecto
* Servicios para manejo de peticiones
* Selector dinámico de especies
* Renderizado de tarjetas de personajes
* Uso de hooks (`useState` y `useEffect`)

---

## Estructura del proyecto

```plaintext
src
│
├── api
│   └── axios.js
│
├── services
│   └── personajesService.js
│
├── components
│   └── Personajes.jsx
│
├── App.jsx
└── main.jsx
```

---

## Instalación del proyecto

Clonar el repositorio:

```bash
git clone https://github.com/Ined2011/axios.git
```

Ingresar al proyecto:

```bash
cd axios
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

---

## API utilizada

Rick and Morty API:

https://rickandmortyapi.com/api

---

## Autor

Proyecto realizado por aprendiz en formación de desarrollo de software.
