import { Component, OnInit } from '@angular/core';
import { KittensService } from './kittens.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'client';
  name = 'Oscar';

  kittens = [];

  constructor(private kittensService: KittensService) {

  }

  ngOnInit() {
    this.getAllKittens();
  }

  getAllKittens() {
    const observable = this.kittensService.getAll();
    observable.subscribe((data: any) => {
      this.kittens = data;
    });
  }


}
