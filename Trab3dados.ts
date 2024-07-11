import { Carro } from "./Trab3"

export class Basededados{
    cars: Carro[]

    constructor(){
        this.cars = []
    }
    addCarros(carro: Carro){
        this.cars.push(carro)
    }
    getCarros(): void{
        console.log(this.cars);
    }
}

let veiculo = new Carro("fusca", "Chevrolet", 20, 10)
let garagem = new Basededados()

garagem.addCarros(veiculo)
garagem.getCarros()