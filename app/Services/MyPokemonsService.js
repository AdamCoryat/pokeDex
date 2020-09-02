import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";


class MyPokemonServices{
  

  setActive(id) {
    ProxyState.activePokemon = ProxyState.myPokemon.find(p => p.id == id)
  }

  async getMyPokemon() {

    let res = await sandboxApi.get('')
    ProxyState.myPokemon = res.data.data.map(p => new Pokemon(p))
  }

  async addPokemon() {
    let res = await sandboxApi.post('', ProxyState.activePokemon)
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data.data)]
  }

  async removePokemon() {
    let res = await sandboxApi.delete(ProxyState.activePokemon.id)
    ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id != ProxyState.activePokemon.id)
    ProxyState.activePokemon = null 
  }
}

const myPokemonsServices = new MyPokemonServices();
export default myPokemonsServices