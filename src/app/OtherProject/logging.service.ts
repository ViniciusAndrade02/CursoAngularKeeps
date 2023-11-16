import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {

  status = new BehaviorSubject("");

  statusChanges(status: any) {
    //console.log(status);
    this.status.next(status);
  }
}
