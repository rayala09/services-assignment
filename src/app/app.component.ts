import { Component, OnInit } from '@angular/core';
import { UsersService } from './users-service.service';
import { CounterServiceService } from './counter-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  num: number;

  constructor(private counterService: CounterServiceService) {

  }
  ngOnInit() {
    this.counterService.update.subscribe((number_: number ) => this.num = number_ );

  }
//   counter() {
//     this.num++;
//     console.log(this.num);
//   }
// }
