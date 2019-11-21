import { Cards } from './card.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  constructor() { }

  getCards(): Cards[]{
    return[
      {id:1, legenda:"A Camerata foi apenas os dois no início, e suas fileiras nunca foram destinadas a exceder um número a ser contado em uma mão.", img: "assets/Grant.png"},
      {id:2, legenda:"Red, uma jovem cantora, entrou em posse do Transistor. Sendo a poderosa espada falante. O grupo Possessores quer tanto ela quanto o Transistor e está perseguindo implacavelmente a sua procura.", img: "assets/Red.png"},
      {id:3, legenda:"Sybil é descrita pelo Transistor como sendo os 'olhos e ouvidos' da Camerata.",  img: "assets/Sybil_2.png"}
  ]
  }

}
