import { test, expect } from '@playwright/test';
import { OrangeHrmDashboardPage } from '../pages/OrangeHrmDashboard';
import { OrangeLoginPage } from '../pages/OrangeLoginPage';

test('test', async ({ page }) => {
  const dashboardPage = new OrangeHrmDashboardPage(page);
  const loginPage = new OrangeLoginPage(page);


  await dashboardPage.goto();

  //await page.pause();

  await loginPage.login('Admin', 'admin123');
  await dashboardPage.verifyPageIsLoaded();
});