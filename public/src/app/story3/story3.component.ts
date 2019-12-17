import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-story3',
  templateUrl: './story3.component.html',
  styleUrls: ['./story3.component.css']
})
export class Story3Component implements OnInit {
showId;
  constructor() { }

  ngOnInit() {
  }
  closeShow(){
    this.showId = null;
  }
}
