import { Component } from '@angular/core';
import { Sidebar } from './interfaces/sidebar.inteface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard-dualvet';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: Sidebar): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
