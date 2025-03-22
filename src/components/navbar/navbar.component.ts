import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports:[RouterLink,RouterLinkActive],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  private readonly _AuthService = inject(AuthService);
  ngOnInit() {
  }

  signOut():void{
    this._AuthService.logOut();
  }

}
