import { Component, OnInit } from '@angular/core';
import { User } from '../homeclasses/user';
import { ProfileServiceService } from '../services/profile-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    userData: User;
    repositories:any;
    
  constructor(private requestProfile : ProfileServiceService ) {}

  getuser(gitUser){
    this.requestProfile.getUserDataRequest(gitUser).then(
      (response)=>{
        this.userData = this.requestProfile.userInfor;
        console.log(this.userData);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getRepos(gitUser){
    this.requestProfile.getReposRequest(gitUser).then(
      (response)=>{
        this.repositories = this.requestProfile.repositoryInfor;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getuser("jobkarani")
    this.getRepos("jobkarani")
  }

}
