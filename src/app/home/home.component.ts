import { Component, OnInit } from '@angular/core';
import { Repos } from '../homeclasses/repos';
import { User } from '../homeclasses/user';
import { ProfileServiceService } from '../services/profile-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    user!: User;
    repositories!: Repos;
    
  constructor(private request : ProfileServiceService ) {}

  getuser(gitUsername:any){
    this.request.getUserDataRequest(gitUsername).then(
      (response)=>{
        this.user = this.request.userInfor;
      },
      (error:any) => {
        console.log(error);
      }
    );
  }

  getRepos(gitUsername:any){
    this.request.getReposRequest(gitUsername).then(
      (response)=>{
        this.repositories = this.request.repositoryInfor;
      },
      (error:any) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getuser("jobkarani")
    this.getRepos("jobkarani")
  }

}
