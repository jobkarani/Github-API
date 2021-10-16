import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../homeclasses/user'; 
import { Repos } from '../homeclasses/repos'; 

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  userInfor!: User;
  repositoryInfor!: Repos;

  constructor(private http:HttpClientModule) { 
    this.userInfor= new User(
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      0,
      0,
      new Date(),

    ),
    this.repositoryInfor = new Repos(
      '',
      '',
      '',
      new Date(),
    )

  }
}
