import { AccountService } from './../accounts.service';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
})
export class AddAccountComponent implements OnInit {
  @ViewChild('selectEl') selectEl: ElementRef;
  @ViewChild('inputEl') inputEl: ElementRef;
  constructor(private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe((status: string) =>
      alert('new status: ' + status)
    );
  }

  ngOnInit(): void {}

  onCreateAccount(): void {
    this.accountService.onAccountAdded(
      this.inputEl.nativeElement.value,
      this.selectEl.nativeElement.value
    );
  }
}
