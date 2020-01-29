import { Injectable } from '@angular/core';
import { WshelperService } from './wshelper.service';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private wshelperService: WshelperService) { }
}
