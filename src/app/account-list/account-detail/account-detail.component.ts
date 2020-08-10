import { AccountService } from './../../accounts.service';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
})
export class AccountDetailComponent implements OnInit {
  @Input() accountDetail: { name: string; type: string };
  @Input() id: number;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  onUpdateStatus(id: number, type: string) {
    this.accountService.updateStatus(id, type);
    this.accountService.statusUpdated.emit(type);
  }
}
