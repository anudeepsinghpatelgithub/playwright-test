import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private userNameInput = "[name='username']";
  private passwordInput = "[name='password']";
  private loginButton = "//button[contains(@class,'orangehrm-login-button')]";

  async login(username: string, password: string) {
    await this.enterText(this.userNameInput, username);
    await this.enterText(this.passwordInput, password);
    await this.click(this.loginButton);
  }
}
