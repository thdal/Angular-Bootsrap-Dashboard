import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import {TokenStorageService} from "../../@core/services/token-storage.service";
import {Router} from "@angular/router";
import {TokenService} from "../../@core/api/auth/token.service";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent  {

  error: boolean = false;
  user: any = {};
  submitted: boolean = false;

  constructor(private tokenService: TokenService,
              private tokenStorage: TokenStorageService,
              private router: Router) {
  }

  login(): void {
    this.tokenService.authentication(this.user).subscribe((response: any) => {
      this.tokenStorage.saveToken(response);
      this.router.navigateByUrl('/support/dashboard');
    }, error => {
      this.error = true;
    })
  }

}
