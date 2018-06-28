import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users-service.service';
import { CounterServiceService } from '../counter-service.service'

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersServicee: UsersService, private counterService: CounterServiceService) {

  }

  onSetToInactive(id: number) {
    this.usersServicee.onSetToInactive(id);
    this.counterService.counter();
  }

  ngOnInit() {
    this.users = this.usersServicee.activeUsers;
  }
}
