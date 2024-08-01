import { test, expect } from '@playwright/test';
import { OrangeHrmDashboardPage } from '../pages/OrangeHrmDashboard';
import { OrangeHrmAdminPage } from '../pages/OrangeHrmAdminPage';
import { OrangeHrmLoginPage } from '../pages/OrangeHrmLoginPage';

test('test', async ({ page }) => {
  const dashboardPage = new OrangeHrmDashboardPage(page);
  const loginPage = new OrangeHrmLoginPage(page);
  const adminPage = new OrangeHrmAdminPage(page);
  const username = process.env.ORANGEHRM_USERNAME as string;
  const password = process.env.ORANGEHRM_PASSWORD as string;

  await dashboardPage.goto();

  await loginPage.login(username, password);
  await dashboardPage.verifyPageIsLoaded();
  await dashboardPage.sidebarAdminLink.click();
  await adminPage.topbarJobTab.click();
  await adminPage.topbarJobTitleLink.click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('');
  await page.getByRole('textbox').nth(1).press('CapsLock');
  await page.getByRole('textbox').nth(1).fill('QA');
  await page.getByPlaceholder('Type description here').click();
  await page.getByPlaceholder('Type description here').fill('Quality Assurance Technician');
  await page.getByRole('button', { name: 'Save' }).click();
  
  await page.waitForTimeout(10000);
  // await expect(page.getByRole('table')).toContainText('QA');
  // await expect(page.getByRole('table')).toContainText('Quality Assurance Technician');
  // await page.getByRole('button', { name: '' }).click();
  //await page.getByRole('button', { name: ' Yes, Delete' }).click();
});

 