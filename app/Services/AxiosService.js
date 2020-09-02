export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  timeout: 10000
})

export const sandboxApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/adam/pokemon",
  timeout: 10000
})