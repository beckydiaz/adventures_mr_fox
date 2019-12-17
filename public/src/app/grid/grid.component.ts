import { Component, OnInit } from '@angular/core';


var world = [

  [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2],
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
  }
  drinksPupaccino() {
    this.health += 5;
  }
  visitSpa() {
    this.health += 10;
  }
  eatChocolate() {
    this.health -= 5;
  }
  seesRainstorm() {
    this.health -= 10;
  }
  seesLake() {
    this.health -= 5;
  }
  seesDogFriend() {
    this.health += 5;
  }
  seesMrNibbles() {
    this.health += 5;
  }
  seesAnne() {
    this.health += 5;
  }
  seesAdrien() {
    this.health -= 5;
  }
  seesRyan() {
    this.health -= 5;
  }

}

var MrFox = new Character('Mr. Fox', 50, 1, 1)


var health = 50;


function displayMrFox() {
  document.getElementById('MrFox').style.top = MrFox.y * 640 + "px";
  document.getElementById('MrFox').style.left = MrFox.x * 1220 + "px";
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
  
  displayMrFox() {
    document.getElementById('MrFox').style.top = MrFox.y * 640 + "px";
    document.getElementById('MrFox').style.left = MrFox.x * 1220 + "px";
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
        if (world[i][j] == 3)
          output += "<div class='tree'></div>";
        if (world[i][j] == 4)
          output += "<div class='dojo'></div>";
        if (world[i][j] == 5)
          output += "<div class='house'></div>";
      }
      output += "</div>";
    }
    console.log(output);
    return output;
  }

  moveup() {
    console.log('message')
    MrFox.y -= .1;
    displayMrFox();
  }

  movedown() {
    MrFox.y += .1;
    displayMrFox();
  }

  moveleft() {
    MrFox.x -= .1;
    displayMrFox();
    
  }

  moveright() {
    MrFox.x += .1;
    displayMrFox();
  }

  displayHealth() {
    return health;
  }

}
