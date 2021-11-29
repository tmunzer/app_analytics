import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface WlanElement {
  id: string,
  name: string
}


@Injectable({
  providedIn: 'root'
})
export class WlansService {
  private wlansSource = new BehaviorSubject([]);

  wlans = this.wlansSource.asObservable();

  constructor() { }

  wlansSet(data: WlanElement[]) {
    this.wlansSource.next(data)
  }

}
