import { ProxyState } from "../AppState.js";
import myPokemonsService from "../Services/MyPokemonsService.js";

//Private
function _drawActivePokemon(){
  let elem = document.getElementById('active-pokemon')
  if (ProxyState.activePokemon){
    elem.innerHTML = ProxyState.activePokemon.Template
  } else {
    elem.innerHTML = ""
  }
}

function _drawMyPokemon(){
  let pokemon = ProxyState.myPokemon
  let template = ""
  pokemon.forEach(p => template += `<li onclick="app.myPokemonsController.setActive('${p.id}')">${p.name}</li>`)
  document.getElementById('my-pokemon').innerHTML = template
}


//Public
export default class MyPokemonsController{
  constructor(){
    ProxyState.on("activePokemon", _drawActivePokemon)
    ProxyState.on("myPokemon", _drawMyPokemon)
    this.getMyPokemon()
  }

  getMyPokemon(){
    try {
      myPokemonsService.getMyPokemon()
    } catch (error) {
      console.error(error)
    }
  }
  setActive(id){
    myPokemonsService.setActive(id)
  }

  addPokemon(){
    try {
      myPokemonsService.addPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  removePokemon(){
    try {
      myPokemonsService.removePokemon()
    } catch (error) {
      console.error(error)
    }
  }
}