import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css'],
})
export class ActiveUserComponent implements OnInit {
  users: string[] = [];
  constructor(private userService: UserService) {
    this.users = this.userService.activeUsers;
  }

  ngOnInit(): void {}

  setToInactive(id: number) {
    this.userService.setActiveToInactive(id);
  }
}
