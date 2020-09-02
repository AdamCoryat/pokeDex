import ApiPokemonsController from "./Controllers/ApiPokemonsController.js";

class App {
  apiPokemonsController = new ApiPokemonsController();

}

window["app"] = new App();
