import { Locator, Page, expect } from "@playwright/test";

export class OrangeHrmDashboardPage {

    readonly page: Page;
    readonly profileUsername: Locator;
    readonly headerLabel: Locator;



    constructor(page: Page) {
        this.page = page;
        this.profileUsername = page.locator('p.oxd-userdropdown-tab');
        this.headerLabel = this.page.getByRole('heading', { name: 'Dashboard' });

    }

    async verifyPageIsLoaded() {
        await expect(this.headerLabel).toBeVisible();

    }

    async goto(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

}