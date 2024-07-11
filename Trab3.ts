var reader = require('readline-sync')

export interface CarroPadra{
    modelo: string
    marca: string
    gasolinaQuant: number
    KmporLitro: number
}
export interface CarroTestes{
    andar():void;
    setDados():void;
    obterDados():void;
}
export class Carro implements CarroPadra, CarroTestes{
    modelo: string
    marca: string
    gasolinaQuant: number
    KmporLitro: number
    constructor(nomedoCarro: string, marcaCarro: string, quantidadedeGasolina: number, KilometragemporLitro: number){
        this.modelo = nomedoCarro
        this.marca = marcaCarro
        this.gasolinaQuant = quantidadedeGasolina
        this.KmporLitro = KilometragemporLitro        
    }
    andar(): void {
        let distancia = reader.question("Quantos quilometros de viagem deseja atravessar? ")
        let consumoporKm = 1000 / this.KmporLitro
        let consumoTotal = consumoporKm * distancia
        let gasolinaAtualizar = this.gasolinaQuant - consumoTotal
        this.gasolinaQuant = gasolinaAtualizar
    }
    setDados(): void {
        let nomeCarroUpdate = reader.question("Qual o modelo do carro? ")
        let marcaUpdate = reader.question("Qual a marca dona do carro? ")
        this.modelo = nomeCarroUpdate
        this.marca = marcaUpdate
        let quantGasolin = reader.question("Quantos litros de gasolina existem no tanque de seu carro? ")
        let consumoGasolina = reader.question("Quantos quilometros seu carro faz por litro? ")
        this.gasolinaQuant = quantGasolin
        this.KmporLitro = consumoGasolina
    }
    obterDados(): void {
        let nomeCarroUpdate = reader.question("Qual o modelo do carro? ")
        let marcaUpdate = reader.question("Qual a marca dona do carro? ")
        this.modelo = nomeCarroUpdate
        this.marca = marcaUpdate
    }
}
