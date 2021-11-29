import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ListUsersComponent,
    ViewUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,  
    MatButtonModule,
    MatSnackBarModule 
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY, useValue: {duration: 500}}
  ]
})
export class UsersModule { }
