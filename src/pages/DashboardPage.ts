import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  private userNameLink = "[class='oxd-userdropdown-name']";

  async verifyUserLoggedIn() {
    await expect(this.page.locator(this.userNameLink)).toBeVisible();
  }
}
