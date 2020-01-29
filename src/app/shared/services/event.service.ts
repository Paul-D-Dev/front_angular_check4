import { Injectable } from '@angular/core';
import { WshelperService } from './wshelper.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private wshelperService: WshelperService) { }

  public salesEventId: number;

  get() {
    return this.wshelperService.get(environment.serverUrl + 'events/');
  }

  getOne(id) {
    return this.wshelperService.get(environment.serverUrl + 'events/' + id);
  }

  create(element) {
    return this.wshelperService.post(environment.serverUrl + 'users/', element);
  }

  put(element, id) {
    return this.wshelperService.put(environment.serverUrl + 'users/' + id, element);
  }

  delete(id) {
    return this.wshelperService.delete(environment.serverUrl + 'users/' + id);
  }
}
