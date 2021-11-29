import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  
  id: string = "";
  constructor(private activatedRoute: ActivatedRoute, private _userService: UserService, private _snackBar: MatSnackBar, private router: Router) {  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( data => {
      this.id = data['id'];
    });

    if(this.id) {
      this._userService.deleteUser(this.id).subscribe( data => {
        this._snackBar.open("User deleted successfully");
         this.router.navigate(['users/list']);
      }, err => {
        this._snackBar.open("Delete user failed");
      })
    }
  }

}
