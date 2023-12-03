import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

export class Pages {
  constructor(private page: Page) {}

  public readonly loginPage = new LoginPage(this.page);
  public readonly dashboardPage = new DashboardPage(this.page);
}
