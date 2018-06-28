import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../users-service.service';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[] = [];
  // @Output() userSetToActive = new EventEmitter<number>();
  constructor(private usersService: UsersService, private counterService: CounterServiceService) {

  }
  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.counterService.counter();
  }
  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }
}
