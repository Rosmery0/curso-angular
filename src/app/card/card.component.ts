import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string = "https://cdn1.dotesports.com/wp-content/uploads/sites/4/2021/11/15155110/ezgif-2-b0fc567224a3-1.jpg";
  public title:string = "Angular course with interpolation";

  constructor() { }

  ngOnInit(): void {
    
  }
  
}