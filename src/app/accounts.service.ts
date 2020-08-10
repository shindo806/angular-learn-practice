import { LogginService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'master',
      type: 'active',
    },
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LogginService) {}

  onAccountAdded(name: string, type: string) {
    this.accounts.push({ name, type });
    this.loggingService.logStatusChange(type);
  }

  updateStatus(id: number, type: string) {
    this.accounts[id].type = type;
    this.loggingService.logStatusChange(type);
  }
}
