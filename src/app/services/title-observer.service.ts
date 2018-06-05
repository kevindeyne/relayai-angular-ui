import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleObserverService {

  private messageSource = new BehaviorSubject<string>('default title');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  push(newTitle: string) {
    this.messageSource.next(newTitle);
  }

  unsubscribe() {
    this.messageSource.unsubscribe();
  }
}
