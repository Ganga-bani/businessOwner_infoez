import { expect } from "@playwright/test";
import { BasePage } from "./BasePage"

export class MyBusinessPage extends BasePage{
    /**@param {import('@playwright/test').Page} page */
    constructor(page){
        super(page)

        this.click_mybusiness = page.locator("//a[@data-testid='biz-nav-my-businesses']")
        this.edit_button = page.locator("//button[text()='Edit']")
        this.edit_services = page.locator("//input[@data-testid='biz-services']")
        this.save_changes = page.locator("//button[text()='Save changes']")
        this.redirected_dashboard = page.locator("//h1[text()='My businesses']") 
        this.leads_dashboard = page.locator("//a[@data-testid='biz-nav-leads']")
        this.verify_leads = page.locator("//h1[text()='Leads']")
    }

    async mybusiness_click(){
        await this.click(this.click_mybusiness);
    }
    async EditButton(){
        await this.click(this.edit_button);
    }
    async Services(text){
        await this.fill(this.edit_services,text);
    }
    async SaveChanges(){
        await this.click(this.save_changes);
    }
    async dashboard_mybiz(text){
        await expect(this.redirected_dashboard).toBeVisible({timeout:10000});
        await expect(this.redirected_dashboard).toContainText(text);
    }
    async leads(){
        await expect(this.leads_dashboard).toBeVisible({timeout:10000});
        await this.click(this.leads_dashboard);
    }
    async leads_assert(text){
        await expect(this.verify_leads).toBeVisible({timeout:10000});
        await expect(this.verify_leads).toContainText(text);
    }



}