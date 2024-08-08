import { test, expect } from '@playwright/test';
import { OrangeHrmDashboardPage } from '../pages/OrangeHrmDashboard';
import { OrangeHrmAdminPage } from '../pages/OrangeHrmAdminPage';
import { OrangeHrmLoginPage } from '../pages/OrangeHrmLoginPage';
import { OrangeHrmAdminUserPage } from '../pages/OrangeHrmAdminUserPage';


test.beforeEach(async ({ page }) => {
  const dashboardPage = new OrangeHrmDashboardPage(page);
  const loginPage = new OrangeHrmLoginPage(page);

  const username = process.env.ORANGEHRM_USERNAME as string;
  const password = process.env.ORANGEHRM_PASSWORD as string;

  await dashboardPage.goto();

  await loginPage.login(username, password);
  await dashboardPage.verifyPageIsLoaded();
});
test('test', async ({ page }) => {
  const dashboardPage = new OrangeHrmDashboardPage(page);
  
  const adminPage = new OrangeHrmAdminPage(page);
  // const adminUserPage = new OrangeHrmAdminUserPage(page);

  await dashboardPage.sidebarAdminLink.click();

  // await adminUserPage.topbarUserManagementTab.click();
  // await adminUserPage.userMenuItem.click();
  // await adminUserPage.verifySystemUserLabelIsDisplayed();
  // await adminUserPage.searchBtn.click();
  // await adminUserPage.verifyrecordsFoundLabelIsDisplayed();
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
test('Admin user management test', async ({ page }) => {
  const dashboardPage = new OrangeHrmDashboardPage(page);
  await dashboardPage.verifyPageIsLoaded();

console.log("test");

});

