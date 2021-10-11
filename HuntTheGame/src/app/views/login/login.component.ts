import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fuser: any;
  fpassword: any;
  login: boolean = false;
  loginError: boolean = false;
  public user: Array<User> = [];
  public miToken: number = +localStorage.getItem('personalToken')!;

  constructor(private UsersService: UsersService, private router: Router) {
    if (localStorage.getItem('personalToken')) {
      this.miToken = +localStorage.getItem('personalToken')!;
    }
   }

  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {
    this.UsersService.getUser().subscribe((u: Array<User>) => {
      this.user = u;
    })
  }

  // Voy por aquí 
  post() {


    for (let usuario of this.user) {
      let okLogin = 0;
      if (usuario.name == this.fuser) {
        okLogin++;
      }

      if (usuario.password == this.fpassword) {
        okLogin++;
      }

      if (okLogin == 2) {
        this.login = true;
      }
    }

    if(this.login == false){
      this.loginError = true;
    }
    else{
      this.loginError = false;
      localStorage.setItem('personalToken',`${ 1 }`);
      this.router.navigate(['/sesion']).then(()=>{window.location.reload();});
    }
    

  }

 

}
