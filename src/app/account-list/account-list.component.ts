import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent implements OnInit {
  @Input() account: {
    name: string;
    type: string;
  };
  @Input() id: number;
  constructor() {}

  ngOnInit(): void {}
}
