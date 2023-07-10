import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-feed-navigation',
  templateUrl: './feed-navigation.component.html',
  styleUrls: ['./feed-navigation.component.scss']
})
export class FeedNavigationComponent {
  @Output() selector= new EventEmitter<string>();

  onSelect(selection: string){
    this.selector.emit(selection)
  }
}
