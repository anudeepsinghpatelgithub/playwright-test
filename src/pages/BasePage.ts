import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected page: Page) {}

  protected async click(selector: string) {
    await this.page.locator(selector).click();
  }

  protected async enterText(selector: string, value: string) {
    await this.page.locator(selector).fill(value);
  }
}
