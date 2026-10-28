import { expect } from "@playwright/test";
import { BasePage } from "./BasePage"

export class LoginPage extends BasePage{
    /**@param {import('@playwright/test').Page} page */
    constructor(page){
        super(page)
       this.app_signin_button = page.locator("//button[text()='Sign in']")
       this.app_email_button = page.locator("//input[@data-testid='login-email']")
       this.app_password_button = page.locator("//input[@data-testid='login-password']")
       this.dashboard_signin = page.locator("//button[@data-testid='login-submit-btn']") 
       //this.dashboard_welcomealert = page.locator("//div[text()='Welcome back!']")
       this.dashboard_profile = page.locator("//span[@class='hidden sm:inline text-sm font-medium']")
       this.business_dashboard = page.locator("//div[@data-testid='menu-business-dashboard']")
       this.business_title = page.locator("//h1[text()='Business dashboard']")
       this.add_business = page.locator("//a[@data-testid='biz-nav-add-business']")
       this.add_name = page.locator("//input[@data-testid='biz-name']")
       this.add_description = page.locator("//textarea[@data-testid='biz-desc']")
       this.category_dropdown = page.locator("//button[@data-testid='biz-category']")
       this.price_dropdown = page.locator("(//button[@role='combobox'])[2]")
       this.city_name = page.locator("//input[@data-testid='biz-city']")
       this.add_address = page.locator("//input[@data-testid='biz-address']")
       this.add_phone = page.locator("//input[@data-testid='biz-phone']")
       this.add_email = page.locator("//input[@type='email']")
       this.add_hour = page.locator ("//input[@placeholder='Mon-Sun 9AM–9PM']")
       this.add_services = page.locator("//input[@data-testid='biz-services']")
       this.add_location = page.locator("//button[@data-testid='biz-use-location']")
       this.add_create = page.locator("//button[@data-testid='biz-submit-btn']")



    }
    async browserlaunch(URL){
        await this.openapp(URL) 
    }

    async appsignin(){
        await expect(this.app_signin_button).toBeVisible({timeout:10000});
        await this.click(this.app_signin_button);
    }

    async emailfield(email){
        await expect(this.app_email_button).toBeVisible({timeout:10000});
        await this.fill(this.app_email_button, email);
    }

    async passwordfield(password){
        await expect(this.app_password_button).toBeVisible({timeout:10000});
        await this.fill(this.app_password_button, password);
    }

    async singindashboard(){
        await expect(this.dashboard_signin).toBeVisible({timeout:10000});
        await this.click(this.dashboard_signin);
    }
    async profile(){
       // await expect(this.ravi_profile).toBeVisible({timeout:10000});
        await this.click(this.dashboard_profile);
    }
    async business(){
        await expect(this.business_dashboard).toBeVisible({timeout:10000});
        await this.click(this.business_dashboard);
    }
    async dashboardtitle(text){
        await expect(this.business_title).toBeVisible({timeout:10000});
        await expect(this.business_title).toContainText(text);
    }

    async addbusiness(){
        await this.click(this.add_business);
    }
     
    async addname(text){
        await this.fill(this.add_name,text)
    }
    async adddescription(text){
        await expect(this.add_description).toBeVisible({timeout:10000});
        await this.fill(this.add_description,text)
    }

    async select_category(options){
        await this.selectdropdown(this.category_dropdown,options);
        await expect(this.category_dropdown.locator('options:checked')).toHaveText(options);
    }

    async cityname(text){
        await expect(this.city_name).toBeVisible({timeout:10000});
        await this.fill(this.city_name,text)
    } 
    async address(text){
        await expect(this.add_address).toBeVisible({timeout:10000});
        await this.fill(this.add_address,text)
    } 
    async phone(text){
        await expect(this.add_phone).toBeVisible({timeout:10000});
        await this.fill(this.add_phone,text)
    } 
    async email(text){
        await expect(this.add_email).toBeVisible({timeout:10000});
        await this.fill(this.add_email,text)
    } 
    async hours(text){
        await expect(this.add_hour).toBeVisible({timeout:10000});
        await this.fill(this.add_hour,text)
    }
    async services(text){
        await expect(this.add_services).toBeVisible({timeout:10000});
        await this.fill(this.add_services,text)
    }
    async location(){
        await expect(this.add_location).toBeVisible({timeout:10000});
        await this.click(this.add_location);
    }
    async create(){
        await expect(this.add_create).toBeVisible({timeout:10000});
        await this.click(this.add_create);
    }
    
}
