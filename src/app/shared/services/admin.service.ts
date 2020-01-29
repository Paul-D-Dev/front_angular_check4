import { Injectable } from '@angular/core';
import { WshelperService } from './wshelper.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private wshelperService: WshelperService) { }
}
