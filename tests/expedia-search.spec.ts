import { test, expect } from '@playwright/test';



/**
 * Navigate to Expedia Home Page - Verify Title
 * Select Flights Tab - RoundTrip Tile is selected by default
 * Traveler - 1 By default
 * Date - preselected 
 * 
 * Click On Search - Gives Error 
 * 
 * Leaving From  YUL - Verify 'Montreal, QC'
 * Going to LGA - 'New York NYC'
 * 
 * 
 */


test('has title Expedia', async ({ page }) => {
  await page.goto('https://www.expedia.ca');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Travel with Expedia/);

  // Click on getByRole('tab', { name: 'Flights' })

  await page.getByRole('tab', { name: 'Flights' }).click();
  // await page.waitForTimeout(5000);

  await expect(page.getByRole('tab', { name: 'Roundtrip' })).toBeVisible({});
  await expect(page.getByLabel('Travellers, 1 traveller')).toBeVisible({});

  const searchBtn = page.getByRole('button', { name: 'Search' });

  // await searchBtn.click();

  // await expect(page.getByText('Please select where you\'re leaving from')).toBeVisible({});
  // await expect(page.getByRole('heading', { name: 'Please correct the 2 errors' })).toBeVisible({});
  // await expect(page.getByText('Please select where you\'re going')).toBeVisible({});

  // await page.getByRole('button', { name: 'Leaving from' }).click();
  // await page.getByPlaceholder('Leaving from').click();
  // await page.getByPlaceholder('Leaving from').fill('YUL');
  // await page.keyboard.press('Enter');

  // await page.getByRole('button', { name: 'Going to' }).click();
  // await page.getByPlaceholder('Going to').click();
  // await page.getByPlaceholder('Going to').fill('LGA');
  // await page.keyboard.press('Enter');

  await page.getByRole('button', { name: 'Leaving from' }).click();
  await page.getByPlaceholder('Leaving from').fill('yul');
  await page.getByLabel('Montreal (YUL - Pierre').click();
  await page.getByRole('button', { name: 'Going to' }).click();
  await page.getByPlaceholder('Going to').fill('lga');
  await page.getByLabel('New York (LGA - LaGuardia)').click();

  await page.getByRole('button', { name: 'Search' }).click();


  // await searchBtn.click();


  await page.waitForTimeout(50000);

});
