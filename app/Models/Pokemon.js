export default class Pokemon{
  constructor({name, id, _id, height, weight, order, img, sprites}){
    this.height = height
    this.img = img || sprites.front_shiny
    this.id = id || _id
    this.name = name
    this.order = order
    this.weight = weight
  }

  get Template(){
    return `<div class="card-body">
    <img src="${this.img}" alt="">
    <h4 class="card-title">${this.name}</h4>
    <p class="card-text">Height: ${this.height}</p>
    <p class="card-text">Weight: ${this.weight}</p>
    ${this.Button}
  </div>
    `
  }

  get Button() {
    if (this.order){
      return `<button onclick="app.myPokemonsController.addPokemon()" class="btn btn-success">Catch</button>`
    }
    return `<button onclick="app.myPokemonsController.removePokemon()" class="btn btn-danger">Remove</button>`
  }
}