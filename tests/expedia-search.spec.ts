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

});
