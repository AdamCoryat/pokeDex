//Private

import { ProxyState } from "../AppState.js";
import apiPokemonsServices from "../Services/ApiPokemonsService.js";

function _drawApiPokemon(){
  let pokemon = ProxyState.apiPokemon
  let template = ""
  pokemon.forEach(p => template += `<li onclick="app.apiPokemonsController.getDetails(${p.id})>${p.name}</li>`)
  document.getElementById('api-pokemon').innerHTML = template
}


export default class{
  constructor(){
    ProxyState.on("apiPokemon", _drawApiPokemon)
    this.getAllApiPokemon()
  }


  getAllApiPokemon(){
    try {
      apiPokemonsServices.getAllApiPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  getDetails(id){
    try {
      apiPokemonsServices.getDetails(id)
    } catch (error) {
      console.error(error)     
    }
  }


}