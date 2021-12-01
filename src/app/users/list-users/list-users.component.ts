import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})

export class ListUsersComponent implements OnInit {

  listUsers: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'actions'];
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.listUsers().subscribe(data => {
      this.listUsers = data;
    });
  }

}
