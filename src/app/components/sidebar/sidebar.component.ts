import { Component, OnInit } from '@angular/core';
import { sidebar } from './sidebar'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  
})
export class SidebarComponent implements OnInit {
  
  public sidebar = sidebar;
  public user!: string | null;
  
  constructor() { }

  ngOnInit() {
    this.getFirstName();
  }

  private getFirstName(): void {
    this.user = JSON.parse(localStorage.getItem('user')).split(' ').slice(0, 1).join(' ')
  }
}
