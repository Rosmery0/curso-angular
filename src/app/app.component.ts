import { Component, OnInit } from '@angular/core';

interface ICard{
  titleCard:string;
  subtitleCard:string;
  imageCard:string;
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
      {titleCard:'Video 1', subtitleCard: 'Video 1 subtitle', imageCard:"https://cdn1.dotesports.com/wp-content/uploads/sites/4/2021/11/15155110/ezgif-2-b0fc567224a3-1.jpg"    },
      {titleCard:'Video 2', subtitleCard: 'Video 2 subtitle', imageCard:"https://i0.wp.com/gossipuominiedonne.it/wp-content/uploads/2021/11/l-intro-1638292134.jpg?fit=1600%2C898&ssl=1"},
      {titleCard:'Video 3', subtitleCard: 'Video 3 subtitle', imageCard:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkbCtZ2bWrzqQUhmunsV7gD4AYnq6tFTQ488DZ8jcPZ_LF3Ei2ihD9ndUmEP-UgPAYXa4&usqp=CAU"}
    ]
  }
}
