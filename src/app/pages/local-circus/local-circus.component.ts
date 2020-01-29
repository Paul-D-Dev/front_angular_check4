import { Circus } from './../../shared/models/circus';
import { CircusService } from './../../shared/services/circus.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-circus',
  templateUrl: './local-circus.component.html',
  styleUrls: ['./local-circus.component.scss']
})
export class LocalCircusComponent implements OnInit {


  localCircus: Circus;


  constructor(private circusService: CircusService) { }





  ngOnInit() {
    this.circusService.getOne(1).subscribe((circus: Circus) => {
      this.localCircus = circus;
    });
  }



}
