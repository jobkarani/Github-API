import { Component,  NgModule,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../homeclasses/user';
import { ProfileServiceService } from '../services/profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('j') searchUserForm: NgForm
  profile:string;
  userData: User;

  displayUser=false;

  searchUser(){
    this.profile=this.searchUserForm.value.search;
    console.log(this.profile)

    this.requestProfile.getUserDataRequest(this.profile).then(
      (response)=>{
        this.userData = this.requestProfile.userInfor;
        console.log(this.userData);
      },
      (error) => {
        console.log(error);
      }
    );
    this.displayUser=true;
  }

    constructor(private requestProfile : ProfileServiceService ) {}


  ngOnInit(): void {
  }

}
