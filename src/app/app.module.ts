import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-list/account-detail/account-detail.component';
@NgModule({
  declarations: [AppComponent, AddAccountComponent, AccountListComponent, AccountDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
