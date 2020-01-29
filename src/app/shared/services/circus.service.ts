import { WshelperService } from './wshelper.service';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CircusService {

  constructor(private wshelperService: WshelperService) { }

  get() {
    return this.wshelperService.get(environment.serverUrl + 'circus/');
  }

  getOne(id) {
    return this.wshelperService.get(environment.serverUrl + 'circus/' + id);
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
