import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image?:string;
  public title:string = "Angular course with interpolation";
  @Input() inputData:any;
  constructor() { }

  ngOnInit(): void {
    this.image = "https://cdn1.dotesports.com/wp-content/uploads/sites/4/2021/11/15155110/ezgif-2-b0fc567224a3-1.jpg";
  }
  
}