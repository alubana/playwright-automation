import {Locator, Page} from "@playwright/test";
import { OrangeBasePage } from "./OrangeHrmBasePage";

export class OrangeHrmAdminPage extends OrangeBasePage {
    readonly topbarJobTab: Locator;
    readonly topbarJobTitleLink: Locator;


    constructor(page: Page) {
        super(page);
        this.topbarJobTab = page.locator('span').filter({ hasText: 'Job' }).locator('i');
        this.topbarJobTitleLink = page.getByRole('menuitem', { name: 'Job Titles' });
    }
}