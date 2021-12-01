import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface ClientElement {
  mac: string,
  site_id: string,
  assoc_time: number,
  family: string,
  model: string,
  os: string,
  manufacture: string,
  annotation: string,
  bssid: string,
  hostname: string,
  ip: string,
  ap_mac: string,
  ap_id: string,
  last_seen: number,
  uptime: number,
  ssid: string,
  wlan_id: string,
  dual_band: boolean,
  is_guest: boolean,
  key_mgmt: string,
  group: string,
  band: string,
  channel: number,
  vlan_id: number,
  username: string,
  proto: string,
  rssi: number,
  snr: number,
  idle_time: number,
  tx_rate: number,
  rx_rate: number,
  tx_pkts: number,
  rx_pkts: number,
  tx_bytes: number,
  rx_bytes: number,
  total_bytes: number,
  tx_retries: number,
  rx_retries: number,
  tx_bps: number,
  rx_bps: number,
  psk_id: string,
  x: number,
  y: number,
  num_locating_aps: string,
  map_id: string,
  _ttl: number,
  _id: string
}


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private clientsSource = new BehaviorSubject([]);
  clients = this.clientsSource.asObservable();
  
  private displaySource = new BehaviorSubject(false);
  display = this.displaySource.asObservable();

  constructor() { }

  clientsSet(data: ClientElement[]) {
    this.clientsSource.next(data)
  }
  displaySet(data: boolean){
    this.displaySource.next(data);
  }

}
