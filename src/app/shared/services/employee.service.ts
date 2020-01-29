import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { WshelperService } from './wshelper.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private wshelperService: WshelperService) { }

  get() {
    return this.wshelperService.get(environment.serverUrl + 'employees/');
  }

  getOne(id) {
    return this.wshelperService.get(environment.serverUrl + 'employees/' + id);
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
