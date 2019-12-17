import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story5',
  templateUrl: './story5.component.html',
  styleUrls: ['./story5.component.css']
})
export class Story5Component implements OnInit {
showId
  constructor() { }

  ngOnInit() {
  }

  closeShow(){
    this.showId = null;
  }

}
