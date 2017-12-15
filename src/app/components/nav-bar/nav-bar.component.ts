import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { JerseyService } from '../../services/jersey.service';
import { Router, NavigationExtras } from '@angular/router';
import { Jersey } from '../../models/jersey';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private loggedIn = false;
  private keyword: string;
  private jerseyList:Jersey[] = [];

  constructor(private loginService: LoginService, private jerseyService: JerseyService, private router: Router) { }

  logout() {
    this.loginService.logout().subscribe(
      res => {
        location.reload();
      }, error => {
        console.log(error);
      }
    );
  }

  onSearchByTitle() {
    this.jerseyService.searchJersey(this.keyword).subscribe(
      res => {
        this.jerseyList = res.json();
        console.log(this.jerseyList);
        let navigationExtras: NavigationExtras = {
          queryParams: {
            "jerseyList": JSON.stringify(this.jerseyList)
          }
        };

        this.router.navigate(['/jerseyList'], navigationExtras);
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      }, error => {
        this.loggedIn = false;
      }
    );
  }

}
