import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css'],
})
export class InactiveUserComponent implements OnInit {
  users: string[] = [];
  constructor(private userService: UserService) {
    this.users = this.userService.inactiveUsers;
  }

  ngOnInit(): void {}

  setToActive(id: number) {
    this.userService.setInactiveToActive(id);
  }
}
