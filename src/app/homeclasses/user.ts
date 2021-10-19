export class User {
    constructor (
        public login:string,
        public name:string,
        public avatar_url:string,
        public blog:string,
        public location:string,
        public bio:string,
        public public_repos:number,
        public followers:number,
        public following:number,
        public html_url:string,
    ) {}
}
