import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  id: string = "";
  userDetails: any;
  editUserForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;
  constructor(private activatedRoue: ActivatedRoute, private _userService: UserService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoue.params.subscribe(data => {
      this.id = data["id"];
    });
    if(this.id !== '') {
      //view user details
      this._userService.viewUser(this.id)
      .toPromise()
      .then(data => {
        this.userDetails = data;
        Object.assign(this.userDetails, data);

        //Build the edit form
        this.editUserForm = this.formBuilder.group({
          'name': new FormControl(this.userDetails.name, [Validators.required, Validators.minLength(3)]),
          'email': new FormControl(this.userDetails.email, [Validators.required, Validators.email]),
          'phone': new FormControl(this.userDetails.phone,[Validators.required, Validators.maxLength(10)])
        })
        this.dataLoaded = true;
      })
      .catch (err => {
        console.log(err);
      })
    }
  }
  updateUser(){
    console.log(this.editUserForm.value);
    this._userService.updateUser(this.id, this.editUserForm.value).subscribe(data => {
      this.router.navigate(['users/list']);
      this._snackBar.open("User updated successfully");
    }, err => {
      this._snackBar.open("Unable to update user:" + err);
    })
  }
}