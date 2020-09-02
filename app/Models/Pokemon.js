export default class Pokemon{
  constructor(name, id, _id){
    this.name = name
    this.id = id || _id
  }

  get Template(){
    return `<div class="card-body">
    <h4 class="card-title">${this.name}</h4>
  </div>
    `
  }
}