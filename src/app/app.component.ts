import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  listings = [{
    title: 'This is a title',
    description: 'And this, this is a description.'
  }, {
    title: 'This is another title',
    description: 'And this, this is also a description.'
  }];
}
