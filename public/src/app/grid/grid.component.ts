import { Component, OnInit } from '@angular/core';


var world = [

  [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 2, 2, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];


class Character {
  name: string;
  health: number;
  x: number;
  y: number;

  constructor(name, health = 50, x, y) {
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


function displayMrFox() {
  document.getElementById('MrFox').style.top = MrFox.y * 85 + "px";
  document.getElementById('MrFox').style.left = MrFox.x * 85 + "px";
  return MrFox;
}

var Cat = 'Cat'


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],

})
export class GridComponent implements OnInit {
  stuff: any;
  MrFox: any;
  Cat: any;
  Spa: any;
  // moveup: any;
  // movedown: any;
  // moveleft: any;
  // moveright: any;

  constructor() { }

  ngOnInit() {
    this.stuff = this.displayWorld();
    this.MrFox = this.displayMrFox();
    this.Cat = this.displayCat();
    this.Spa = {
      x: 12,
      y: 3
    }
  }
  
  displayMrFox() {
    document.getElementById('MrFox').style.top = MrFox.y * 85 + "px";
    document.getElementById('MrFox').style.left = MrFox.x * 85 + "px";
    return MrFox;
  }
  
  displayCat() {
    document.getElementById('Cat').style.top = Cat.y * 90 + "px";
    document.getElementById('Cat').style.left = Cat.x * 90 + "px";
		return Cat;
	}



  displayWorld() {
    var output = '';
    for (var i = 0; i < world.length; i++) {
      output += "<div class='row'>";
      for (var j = 0; j < world[i].length; j++) {
        if (world[i][j] == 2)
          output += "<div class='brick'></div>";
        else if (world[i][j] == 1)
          output += "<div class='brick'></div>";
        if (world[i][j] == 0)
          output += "<div class='empty'></div>";
        if (world[i][j] == 3)
          output += "<div class='tree'></div>";
        if (world[i][j] == 4)
          output += "<div class='dojo'></div>";
        if (world[i][j] == 5)
          output += "<div class='house'></div>";
        if (world[i][j] == 6)
          output += "<div class='starbucks'></div>";
        if (world[i][j] == 7)
          output += "<div class='spa'></div>";
        if (world[i][j] == 8)
          output += "<div class='fountain'></div>"; 
        if (world[i][j] == 9)
          output += "<div class='chocolate'></div>";
        if (world[i][j] == 10)
          output += "<div class='meat'></div>"; 
        if (world[i][j] == 11)
          output += "<div class='building'></div>"; 
        if (world[i][j] == 12)
          output += "<div class='coffee'></div>"; 
      }
      output += "</div>";
    }
    console.log(output);
    return output;
  }


  moveMrFox(direction){
    switch(direction){
      case 'up':
          MrFox.y --;
          if(MrFox.x == this.Spa.x && MrFox.y == this.Spa.y){
            MrFox.health+= 10;
          }
        break;
      case 'down':
        MrFox.y ++;
        if(MrFox.x == this.Spa.x && MrFox.y == this.Spa.y){
          MrFox.health+= 10;
        }
        break;
      case 'left':
        MrFox.x --;
        if(MrFox.x == this.Spa.x && MrFox.y == this.Spa.y){
          MrFox.health+= 10;
        }
        break;
      case 'right':
        MrFox.x ++;
        if(MrFox.x == this.Spa.x && MrFox.y == this.Spa.y){
          MrFox.health+= 10;
        }
        break;
    }
    this.displayWorld();
    displayMrFox();
    console.log(`Mr Fox is at x: ${MrFox.x}, y: ${MrFox.y} `)
  }

  displayHealth() {
    return MrFox.health;
  }


}
