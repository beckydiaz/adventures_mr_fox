import { Component, OnInit, HostListener } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';



// var world = [

//   [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [1, 2, 2, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2],
//   [1, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
// ];


// class Character {
//   name: string;
//   health: number;
//   x: number;
//   y: number;

//   constructor(name, health = 50, x, y) {
//     this.name = name;
//     this.health = health;
//     this.x = x;
//     this.y = y;
//   }
//   showStats() {
//     console.log(`Name: ${this.name}, Health: ${this.health}`);
//   }
//   sayName() {
//     console.log(`My name is ${this.name}`)
//   }
//   eatTreat() {
//     this.health += 5;
//   }
//   drinksPupaccino() {
//     this.health += 5;
//   }
//   visitSpa() {
//     this.health += 10;
//   }
//   eatChocolate() {
//     this.health -= 5;
//   }
//   seesRainstorm() {
//     this.health -= 10;
//   }
//   seesLake() {
//     this.health -= 5;
//   }
//   seesDogFriend() {
//     this.health += 5;
//   }
//   seesMrNibbles() {
//     this.health += 5;
//   }
//   seesAnne() {
//     this.health += 5;
//   }
//   seesAdrien() {
//     this.health -= 5;
//   }
//   seesRyan() {
//     this.health -= 5;
//   }

// }

// var MrFox = new Character('Mr. Fox', 50, 1, 1)


// function displayMrFox() {
//   document.getElementById('MrFox').style.top = MrFox.y * 30 + "px";
//   document.getElementById('MrFox').style.left = MrFox.x * 30 + "px";
//   return MrFox;
// }

// var Cat = 'Cat'


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  

})
export class GridComponent implements OnInit {
  MrFox: any;
  cat: any;
  health: any;
  world: any;
  // moveup: any;
  // movedown: any;
  // moveleft: any;
  // moveright: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.health = 50;
    this.cat = {
      x: 13,
      y: 1
    };
    this.MrFox = {
      x: 1,
      y: 1
    };
    this.world = [
    [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 2, 2, 12, 12, 12, 12, 12, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  ];
  this.displayWorld();
  this.displayMrFox();
  this.displayCat();
  this.displayHealth();
  this.moveCat();
  
}

displayWorld() {
  var output = "";

  for (var i = 0; i < this.world.length; i++) {
    output += "<div class= 'row'>";
    for (var j = 0; j < this.world[i].length; j++) {
      if (this.world[i][j] == 2)
        output += "<div class='brick'></div>";
      else if (this.world[i][j] == 1)
        output += "<div class='brick'></div>";
      if (this.world[i][j] == 3)
        output += "<div class='tree'></div>";
      if (this.world[i][j] == 4)
        output += "<div class='house'></div>";
      if (this.world[i][j] == 10)
        output += "<div class='meat'></div>";
      if (this.world[i][j] == 9)
        output += "<div class='chocolate'></div>";
      if (this.world[i][j] == 6)
        output += "<div class='starbucks'></div>";
      if (this.world[i][j] == 5)
        output += "<div class='dojo'></div>";
      if (this.world[i][j] == 7)
        output += "<div class='spa'></div>";
      if (this.world[i][j] == 8)
        output += "<div class='fountain'></div>";
      if (this.world[i][j] == 11)
        output += "<div class='building'></div>";
      if (this.world[i][j] == 12)
        output += "<div class='coffee'></div>";
    }
    output += "</div>";
  }
  // console.log(output);
  document.getElementById('world').innerHTML = output;
}
displayMrFox() {
  document.getElementById("MrFox").style.top = this.MrFox.y * 40 + "px";
  document.getElementById("MrFox").style.left = this.MrFox.x * 40 + "px";
}
displayCat() {
  document.getElementById("cat").style.top = this.cat.y * 40 + "px";
  document.getElementById("cat").style.left = this.cat.x * 40 + "px";
}

displayHealth() {
  document.getElementById("health").innerHTML = this.health;
}

moveCat() {
    this.cat.x = this.cat.x - 2;
}



@HostListener('document:keydown', ['$event']) 
onKeydownHandler(event: KeyboardEvent) {
  if (event.keyCode === 37 && this.world[this.MrFox.y][this.MrFox.x-1] != 1) {
    this.MrFox.x--;
  }
  else if (event.keyCode == 39 && this.world[this.MrFox.y][this.MrFox.x+1] != 1) {
    this.MrFox.x++;

  }
  else if (event.keyCode == 38 && this.world[this.MrFox.y-1][this.MrFox.x] != 1) {
    this.MrFox.y--;
  }
  else if (event.keyCode == 40 && this.world[this.MrFox.y+1][this.MrFox.x] != 1) {
    this.MrFox.y++;
  }

  if (this.world[this.MrFox.y][this.MrFox.x] === 9) {
    this.world[this.MrFox.y][this.MrFox.x] = 2;
    this.health -= 20;


  }
  else if (this.world[this.MrFox.y][this.MrFox.x] === 10) {
    this.world[this.MrFox.y][this.MrFox.x] = 2;
    this.health += 5;

  }
  else if (this.world[this.MrFox.y][this.MrFox.x] === 12) {
    this.world[this.MrFox.y][this.MrFox.x] = 2;
    this.health += 10;

  }

  else if (this.world[this.MrFox.y][this.MrFox.x] === 7 || this.world[this.MrFox.y][this.MrFox.x] === 8) {
    this.health += 5;

  }

  else if (this.world[this.MrFox.y][this.MrFox.x] == this.world[this.cat.y][this.cat.x]) {
    this.world[this.MrFox.y][this.MrFox.x] = 2;
      this.health -= 10;
  }

  this.displayWorld();
  this.displayMrFox();
  this.displayHealth();
  this.displayCat();
  this.moveCat();

  } 
}