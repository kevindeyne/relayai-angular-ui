import { TitleObserverService } from './../services/title-observer.service';
import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit, OnDestroy {

  @Input() title: string;
  @Input() description: string;

  constructor(private data: TitleObserverService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe();
  }

  ngOnDestroy() {
    this.data.unsubscribe();
  }

  onClick(event: MouseEvent) {
    this.data.push('new title');
  }

}
