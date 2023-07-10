import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  loadedSelection = "home";

  onNavigate(selection: string){
    this.loadedSelection = selection;
  }
}
