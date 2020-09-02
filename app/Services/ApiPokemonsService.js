import { pokemonApi } from "./AxiosService.js"
import Pokemon from "../Models/Pokemon.js"
import { ProxyState } from "../AppState.js"

class ApiPokemonsServices{
  async getAllApiPokemon() {
    let res = await pokemonApi.get('')
    ProxyState.apiPokemon = res.data.results
  }

  async getDetails(id){
    let res = await pokemonApi.get(id)
    ProxyState.activePokemon = new Pokemon(res.data)
  }

}

const apiPokemonsServices = new ApiPokemonsServices()
export default apiPokemonsServices