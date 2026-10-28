import { expect } from "@playwright/test";
import { BasePage } from "./BasePage"

export class OverviewPage extends BasePage{
    /**@param {import('@playwright/test').Page} page */
    constructor(page){
        super(page)

        this.Overview = page.locator("//h1[text()='Business dashboard']")
    }


    async overiew_verify(text){
        await expect(this.Overview).toContainText(text);

    }
}