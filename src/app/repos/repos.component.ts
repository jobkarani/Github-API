import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileServiceService } from '../services/profile-service.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  @ViewChild('k') getUserRepoForm: NgForm

  repo:string;
  userRepo;

  showRepos=false;

  getUserRepo(){
    this.repo=this.getUserRepoForm.value.search;
    console.log(this.repo);
    
  this.requestProfile.getReposRequest(this.repo).then(
    (response)=>{
      this.userRepo = this.requestProfile.repositoryInfor;
      console.log(this.userRepo);
    },
    (error) => {
      console.log(error);
    }
  )
}


  constructor(private requestProfile : ProfileServiceService ) {}

  ngOnInit(): void {
  }

}
