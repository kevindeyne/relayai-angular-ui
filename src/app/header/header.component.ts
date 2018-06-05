import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { TitleObserverService } from '../services/title-observer.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  title: string;

  constructor(private data: TitleObserverService) {
    this.title = 'This is the menu';
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.title = message;
    });
  }

  ngOnDestroy() {
    this.data.unsubscribe();
  }

}
