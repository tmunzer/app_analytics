import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface AppElement {
  app: string,
  num_clients: number,
  rx_bytes: number,
  total_bytes: number,
  tx_bytes: number
}


@Injectable({
  providedIn: 'root'
})
export class AppsService {
  private appsSource = new BehaviorSubject([]);
  apps = this.appsSource.asObservable();

  private displaySource = new BehaviorSubject(false);
  display = this.displaySource.asObservable();

  constructor() { }

  appsSet(data: AppElement[]) {
    this.appsSource.next(data)
  }
  
  displaySet(data: boolean){
    this.displaySource.next(data);
  }

}
