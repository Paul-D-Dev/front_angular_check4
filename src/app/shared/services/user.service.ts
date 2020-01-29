import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { WshelperService } from './wshelper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private wsh: WshelperService) { }

    get() {
      return this.wsh.get(environment.serverUrl + 'users');
    }

    getOne(id) {
      return this.wsh.get(environment.serverUrl + 'users/' + id);
    }

    create(element) {
      return this.wsh.post(environment.serverUrl + 'users/', element);
    }

    put(element, id) {
      return this.wsh.put(environment.serverUrl + 'users/' + id, element);
    }

    delete(id) {
      return this.wsh.delete(environment.serverUrl + 'users/' + id);
    }


}
