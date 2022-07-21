import { Component, OnInit } from '@angular/core';

interface ICard{
  titleCard:string;
  subtitleCard:string;
  numberCard?:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My First App';
  public cardArray: ICard[]=[];

  ngOnInit(): void {
    this.cardArray = [
      {titleCard:'Video 1', subtitleCard: 'Video 1 subtitle'},
      {titleCard:'Video 2', subtitleCard: 'Video 2 subtitle'},
      {titleCard:'Video 3', subtitleCard: 'Video 3 subtitle'}
    ]
  }
}
