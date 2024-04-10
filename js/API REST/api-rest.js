// creamos una funcion para llamar a la API


//* si trabajamos con async tiene que haber un await (trabajan juntos)
const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character") //* llamamos a la peticion
    const data = await response.json() //* aca formatemos a json
    // console.log(data.info) // aca la vemos por consola
    // console.log(data.results) // aca la vemos por consola
}

getCharacters()