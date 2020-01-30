import { Injectable } from '@angular/core';
import { WshelperService } from './wshelper.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  constructor(private wshelperService: WshelperService) { }

  get() {
    return this.wshelperService.get(environment.serverUrl + 'tickets/');
  }

  getOne(id) {
    return this.wshelperService.get(environment.serverUrl + 'tickets/' + id);
  }

  create(element) {
    return this.wshelperService.post(environment.serverUrl + 'tickets/', element);
  }

  put(element, id) {
    return this.wshelperService.put(environment.serverUrl + 'tickets/' + id, element);
  }

  delete(id) {
    return this.wshelperService.delete(environment.serverUrl + 'tickets/' + id);
  }
}
