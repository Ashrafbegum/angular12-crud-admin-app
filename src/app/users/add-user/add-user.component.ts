import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private _userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'name': new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormControl('')
    })
  }

  addUser(){
    this._userService.addUser(this.addUserForm.value).subscribe(data => {
      this._snackBar.open("New user added successfuly");
    }, err => {
      this._snackBar.open("Add user failed");
    })
  }

}
