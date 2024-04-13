import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { IMenu } from 'src/app/shared/models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public mainMenu: IMenu[] = [];

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.getCurrentRoute();
  }

  private getCurrentRoute(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.buildMainMenu(this.router.url);
      }
    });
  }

  private buildMainMenu(activeRoute: string): void {
    this.mainMenu = [
      {
        active: this.isActiveMenu(activeRoute, 'dashboard'),
        path: 'dashboard',
        title: 'Dashboard'
      },
      {
        active: this.isActiveMenu(activeRoute, 'movies'),
        path: 'movies',
        title: 'Movies'
      }
    ];
  }

  private isActiveMenu(activeRoute: string, menuPath:  string): boolean {
    return activeRoute === `/${menuPath}`;
  }

  public goToPage(menu: IMenu): void {
    this.router.navigate([menu.path]);
  }
}
