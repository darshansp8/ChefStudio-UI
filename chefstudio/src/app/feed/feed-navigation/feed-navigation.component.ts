import { Component, EventEmitter, Output } from '@angular/core';
import { faAdd, faBookmark, faHome, faHouse, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feed-navigation',
  templateUrl: './feed-navigation.component.html',
  styleUrls: ['./feed-navigation.component.scss']
})
export class FeedNavigationComponent {

  faHome = faHome
  faSearch = faSearch
  faPlus = faAdd
  faSave = faBookmark
  faProfile = faUser

  @Output() selector= new EventEmitter<string>();

  onSelect(selection: string){
    this.selector.emit(selection)
  }
}
