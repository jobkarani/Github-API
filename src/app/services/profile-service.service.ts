import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../homeclasses/user'; 
import { Repos } from '../homeclasses/repos'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  userInfor: User;
  repositoryInfor: Repos;

  constructor(private http:HttpClient) { 
    //for user
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
      '',

    ),
//for repos
    this.repositoryInfor = new Repos(
      '',
      '',
      '',
      new Date(),
    )
  }
//user data
  getUserDataRequest(gitUser){
    interface ApiResponse{
         login:string,
         name:string,
         avatar_url:string,
         blog:string,
         location:string,
         bio:string,
         public_repos:number,
         followers:number,
         following:number,
         html_url:string,
    }
    let userPromise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl  +'/' + gitUser + '??access_token=' + environment.apiKey ).toPromise().then((response)=>{
        this.userInfor = response;
        resolve();
      },
        (error)=>{
        reject(error);
        console.log(error);
      })
    })
    return userPromise
  }

  //user repos
  getReposRequest(gitUser){
    interface ApiResponse{
       name: string,
       html_url: string,
       description: string,
       created_at: Date,
    }
    let repositoryPromise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl + '/'+ gitUser + '/repos?sort=created&direction=desc??access_token='+ environment.apiKey).toPromise().then((response)=>{
        this.repositoryInfor = response;
        resolve();
      },
        (error)=>{
        reject(error);
        console.log(error);
      })
    })
    return repositoryPromise
  }

}
