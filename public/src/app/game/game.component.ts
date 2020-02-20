import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  playerCards: Array<string>;
  leftPlayerCards: Array<string>;
  topPlayerCards: Array<string>;
  rightPlayerCards: Array<string>;
  cards: Array<string> = [
  'black/+4','black/wild',
  'blue/+2','blue/0','blue/1','blue/2','blue/3','blue/4','blue/5','blue/6','blue/7','blue/8','blue/9','blue/reverse','blue/skip',
  'green/+2','green/0','green/1','green/2','green/3','green/4','green/5','green/6','green/7','green/8','green/9','green/reverse','green/skip',
  'red/+2','red/0','red/1','red/2','red/3','red/4','red/5','red/6','red/7','red/8','red/9','red/reverse','red/skip',
  'yellow/+2','yellow/0','yellow/1','yellow/2','yellow/3','yellow/4','yellow/5','yellow/6','yellow/7','yellow/8','yellow/9','yellow/reverse','yellow/skip',
  ];
  reverseCards: Array<string> = ['blue/reverse','green/reverse','red/reverse','yellow/reverse',];
  skipCards: Array<string> = ['blue/skip','green/skip','red/skip','yellow/skip',];
  plus2Cards: Array<string> = ['blue/+2','green/+2','red/+2','yellow/+2',];
  playOnAnyCards: Array<string> = ['black/+4','black/wild'];
  blueCards: Array<string> = ['blue/+2','blue/0','blue/1','blue/2','blue/3','blue/4','blue/5','blue/6','blue/7','blue/8','blue/9','blue/reverse','blue/skip',];
  greenCards: Array<string> = ['green/+2','green/0','green/1','green/2','green/3','green/4','green/5','green/6','green/7','green/8','green/9','green/reverse','green/skip',];
  redCards: Array<string> = ['red/+2','red/0','red/1','red/2','red/3','red/4','red/5','red/6','red/7','red/8','red/9','red/reverse','red/skip',];
  yellowCards: Array<string> = ['yellow/+2','yellow/0','yellow/1','yellow/2','yellow/3','yellow/4','yellow/5','yellow/6','yellow/7','yellow/8','yellow/9','yellow/reverse','yellow/skip',];
  topCard: String = 'blue/2'
  playableCards: Array<string> = []
  TheseCardsPlayable: Array<string> = []
  TheseCardsNPlayable: Array<string> = []
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    var ran1 = Math.round(Math.random() * 52)
    var ran2 = Math.round(Math.random() * 52)
    var ran3 = Math.round(Math.random() * 52)
    var ran4 = Math.round(Math.random() * 52)
    var ran5 = Math.round(Math.random() * 52)
    var ran6 = Math.round(Math.random() * 52)
    var ran7 = Math.round(Math.random() * 52)
    this.playerCards = [this.cards[ran1],this.cards[ran2],this.cards[ran3],this.cards[ran4],this.cards[ran5],this.cards[ran6],this.cards[ran7]]
    console.log('the current card is', this.topCard)
    for(let i = 0; i < this.playerCards.length; i++){ 
      for(let j = 0; j < this.reverseCards.length; j++){
        if(this.topCard == this.reverseCards[j]){
          for(let k = 0; k < this.reverseCards.length; k++){
          this.playableCards.push(this.reverseCards[k])
          }
        }
      }
      for(let j = 0; j < this.skipCards.length; j++){
        if(this.topCard == this.skipCards[j]){
          for(let k = 0; k < this.skipCards.length; k++){
          this.playableCards.push(this.skipCards[k])
          }
        }
      }
      for(let j = 0; j < this.plus2Cards.length; j++){
        if(this.topCard == this.plus2Cards[j]){
          for(let k = 0; k < this.plus2Cards.length; k++){
          this.playableCards.push(this.plus2Cards[k])
          }
        }
      }
      for(let j = 0; j < this.playOnAnyCards.length; j++){
        if(this.topCard == this.playOnAnyCards[j]){
          for(let k = 0; k < this.playOnAnyCards.length; k++){
          this.playableCards.push(this.playOnAnyCards[k])
          }
        }
      }
      for(let j = 0; j < this.blueCards.length; j++){
        if(this.topCard == this.blueCards[j]){
          for(let k = 0; k < this.blueCards.length; k++){
          this.playableCards.push(this.blueCards[k])
          }
        }
      }
      for(let j = 0; j < this.greenCards.length; j++){
        if(this.topCard == this.greenCards[j]){
          for(let k = 0; k < this.greenCards.length; k++){
          this.playableCards.push(this.greenCards[k])
          }
        }
      }
      for(let j = 0; j < this.redCards.length; j++){
        if(this.topCard == this.redCards[j]){
          for(let k = 0; k < this.redCards.length; k++){
          this.playableCards.push(this.redCards[k])
          }
        }
      }
      for(let j = 0; j < this.yellowCards.length; j++){
        if(this.topCard == this.yellowCards[j]){
          for(let k = 0; k < this.yellowCards.length; k++){
          this.playableCards.push(this.yellowCards[k])
          }
        }
      }
    }
    const removeDups = new Set(this.playableCards)
    const backToArray = [...removeDups]
    for(let i = 0; i < this.playerCards.length; i++){
      for(let j = 0; j < backToArray.length; j++){
      if(this.playerCards[i] == backToArray[j]){
        this.TheseCardsPlayable.push(this.playerCards[i])
        }
      }
    }
    const tempNP = []
    for(let i = 0; i < this.playerCards.length; i++){
      for(let j = 0; j < this.TheseCardsPlayable.length; j++){
      if(this.TheseCardsPlayable[j] != this.playerCards[i]){
        tempNP.push(this.playerCards[i])
        }
      }
    }
    const removeDups2 = new Set(tempNP)
    this.TheseCardsNPlayable = [...removeDups2]
    console.log(this.TheseCardsPlayable)
    console.log(this.TheseCardsNPlayable)
  }
}
