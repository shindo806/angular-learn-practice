import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  serverCreated = new EventEmitter<{ name: string; content: string }>();
  blueprintCreated = new EventEmitter<{ name: string; content: string }>();

  newServerName = '';
  newServerContent = '';
  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.serverCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
