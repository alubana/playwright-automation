import { Locator, Page, expect } from "@playwright/test";
import { OrangeBasePage } from "./OrangeHrmBasePage";


export class OrangeHrmDashboardPage extends OrangeBasePage{

    readonly profileUsername: Locator;
    readonly headerLabel: Locator;

    constructor(page: Page) {
        super(page);
        this.profileUsername = page.locator('p.oxd-userdropdown-tab');
        this.headerLabel = page.getByRole('heading', { name: 'Dashboard' });

    }

    async verifyPageIsLoaded() {
        await expect(this.headerLabel).toBeVisible();

    }

    async goto(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

}