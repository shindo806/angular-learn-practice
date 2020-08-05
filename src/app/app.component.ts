import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'blueprint', name: 'test server', content: 'just a test server' },
    { type: 'server', name: 'test server', content: 'just a test server' },
  ];

  onServerAdded(dataServer: { name: string; content: string }) {
    this.serverElements.push({
      type: 'server',
      name: dataServer.name,
      content: dataServer.content,
    });
  }

  onBlueprintAdded(dataBlueprint: { name: string; content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: dataBlueprint.name,
      content: dataBlueprint.content,
    });
  }
}
