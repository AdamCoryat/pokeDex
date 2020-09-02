import { pokemonApi } from "./AxiosService.js"
import Pokemon from "../Models/Pokemon.js"
import { ProxyState } from "../AppState.js"

class ApiPokemonsServices{
  async getAllApiPokemon() {
    let res = await pokemonApi.get('')
    ProxyState.apiPokemon = res.data.results
  }

  async getDetails(name){
    let res = await pokemonApi.get(name)
    ProxyState.activePokemon = new Pokemon(res.data)
  }

}

const apiPokemonsServices = new ApiPokemonsServices()
export default apiPokemonsServices