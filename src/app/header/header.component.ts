import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() onFeatureChanged = new EventEmitter<string>();

  featureSelected = 'recipe';

  onSelect(feature: string): void {
    this.featureSelected = feature;
    this.onFeatureChanged.emit(feature);
  }
}
