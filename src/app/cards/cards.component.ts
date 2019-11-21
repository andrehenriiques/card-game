import { CardService } from './card.service';
import { Component, OnInit } from '@angular/core';
import { Cards } from './card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: Cards[]

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit() {
    this.cards = this.cardService.getCards()
    console.log(this.cards)
  }

}
