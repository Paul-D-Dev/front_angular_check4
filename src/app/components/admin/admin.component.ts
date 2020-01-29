import { User } from './../../shared/models/user';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[];

  ngOnInit() {
    this.userService.get().subscribe((data: User[]) => {
      this.users = data;
    });
  }

}
