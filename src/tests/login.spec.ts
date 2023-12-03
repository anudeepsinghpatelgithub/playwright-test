import { test, expect } from '@playwright/test';
import { Pages } from '../core/Pages';

let pages: Pages;

test.beforeEach(async ({ page }) => {
  pages = new Pages(page);
  await page.goto('/web/index.php/auth/login');
});

test.describe('Valid login scenarios @ui', async () => {
  test('Verify user can login with valid credentials', async ({ page }) => {
    await expect(page).toHaveTitle(/OrangeHRM/);
    await pages.loginPage.login('admin', 'admin123');
    await pages.dashboardPage.verifyUserLoggedIn();
  });
});
