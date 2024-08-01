import { Locator, Page, expect } from "@playwright/test";

export class OrangeBasePage {
    
    readonly page: Page;
    readonly sidebarAdminLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sidebarAdminLink = page.getByRole('link', { name: 'Admin' })
    }
}