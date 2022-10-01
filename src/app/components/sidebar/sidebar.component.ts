import { Component, OnInit } from '@angular/core';
import { sidebar } from './sidebar'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  
})
export class SidebarComponent implements OnInit {
  
  public sidebar = sidebar;
  
  constructor() { }

  ngOnInit() {}

}
