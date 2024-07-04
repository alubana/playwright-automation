import { test, expect } from '@playwright/test';


test('Hubspot Login', async ({ page }) => {
    await page.goto('https://www.hubspot.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/HubSpot/);

    await page.getByLabel('Accept all').click();
    await page.getByRole('link', { name: 'Log in' }).click();

    await expect(page).toHaveTitle(/HubSpot Login/);

    await expect(page.locator("#username")).toBeVisible({});

    //Login
    await page.getByLabel('Email address').fill(process.env.HUBSPOT_USERNAME_1 as string);
    await page.getByLabel('Password').fill(process.env.HUBSPOT_PASSWORD_1 as string);

    await page.locator('[data-test-id="password-login-button"]').click();



    await page.waitForTimeout(50000);


});