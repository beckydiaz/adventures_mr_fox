import { Component, OnInit } from '@angular/core';
import { AsyncHook } from 'async_hooks';

var world = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];


class Character {
  name: string;
  health: number;
  x: number;
  y: number;

  constructor(name, health = 100, x, y) {
    this.name = name;
    this.health = health;
    this.x = x;
    this.y = y;
  }
  showStats() {
    console.log(`Name: ${this.name}, Health: ${this.health}`);
  }
  sayName() {
    console.log(`My name is ${this.name}`)
  }
  eatTreat() {
    this.health += 5;
    console.log(`${this.name} loves treats!`);
  }
  eatChocolate() {
    this.health -= 5;
    console.log(`${this.name} loves chocolate, but it's not good for him!`);
  }
}

var MrFox = new Character('Mr. Fox', 50, 1, 1)


var health = 50;


function displayMrFox(){
  document.getElementById('MrFox').style.top = MrFox.y*85+"px";
  document.getElementById('MrFox').style.left = MrFox.x*210+"px";
  return MrFox;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],

})
export class GridComponent implements OnInit {
  stuff: any;
  health: any;
  MrFox: any;
  // moveup: any;
  // movedown: any;
  // moveleft: any;
  // moveright: any;

  constructor() { }

  ngOnInit() {
    this.stuff = this.displayWorld();
    this.health = this.displayHealth();
    this.MrFox = this.displayMrFox();
    this.moveup();
    this.movedown();
    this.moveleft();
    this.moveright();
  }
  displayMrFox(){
    document.getElementById('MrFox').style.top = MrFox.y*85+"px";
    document.getElementById('MrFox').style.left = MrFox.x*210+"px";
    return MrFox;
  }
  displayWorld() {
    var output = '';
    for (var i = 0; i < world.length; i++) {
      output += "<div class='row'>";
      for (var j = 0; j < world[i].length; j++) {
        if (world[i][j] == 2)
          output += "<div class='brick'></div>";
        else if (world[i][j] == 1)
          output += "<div class='empty'></div>";
        if (world[i][j] == 0)
          output += "<div class='empty'></div>";
      }
      output += "</div>";
    }
    console.log(output);
    return output;
  }
  
  moveup() {
    console.log('message')
    MrFox.y -= .5;
    displayMrFox();
  }
  
  movedown() {
    MrFox.y += .5;
    displayMrFox();
  }
  
  moveleft() {
    MrFox.x -= .25;
    displayMrFox();
  }
  
  moveright() {
    MrFox.x += .25;
    displayMrFox();
  }
  
  displayHealth() {
    return health;
  }

}
