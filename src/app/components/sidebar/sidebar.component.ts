import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageRoutes } from 'src/app/enum/page-routes.enum';
import { sidebar } from './sidebar'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  
})
export class SidebarComponent implements OnInit {
  
  public sidebar = sidebar;
  public user: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.getFirstName();
  }

  private getFirstName(): void {
    this.user = JSON.parse(localStorage.getItem('user')).split(' ').slice(0, 1).join(' ')
  }

  public logout():void {
    localStorage.clear();
    this.router.navigate([PageRoutes.AUTHENTICATION]);
  }
}
