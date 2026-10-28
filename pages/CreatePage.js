import { expect } from "@playwright/test";
import { BasePage } from "./BasePage"

export class CreatePage extends BasePage{
    /**@param {import('@playwright/test').Page} page */
    constructor(page){
        super(page)

        this.biz_signin = page.locator("//button[text()='Sign in']")
        this.create_one = page.locator("//a[text()='Create one']")
        this.biz_option = page.locator("//div[text()='Business']")
        this.Full_name = page.locator("//input[@data-testid='register-name']")
        this.Email_id = page.locator("//input[@data-testid='register-email']")
        this.biz_phone = page.locator("//input[@data-testid='register-phone']")
        this.biz_password = page.locator("//input[@data-testid='register-password']")
        this.biz_account = page.locator("//button[text()='Create account']")
        this.biz_dashboard = page.locator("(//div[text()='Infoez'])[1]")
    }
    async signin(){
        await this.click(this.biz_signin);
    }
    async newAccount(){
        await this.click(this.create_one);
    }
    async bizselect(){
        await this.click(this.biz_option);
    }
    async register_name(name){
        await expect(this.Full_name).toBeVisible({timeout:10000});
        await this.fill(this.Full_name,name);
    }
    async register_email(email){
        await expect(this.Email_id).toBeVisible({timeout:10000});
        await this.fill(this.Email_id,email);
    }
    async register_phone(phone){
        await expect(this.biz_phone).toBeVisible({timeout:10000});
        await this.fill(this.biz_phone,phone);
    }
    async register_password(password){
        await expect(this.biz_password).toBeVisible({timeout:10000});
        await this.fill(this.biz_password,password);
    }
    async biz_createAccount(){
        await this.click(this.biz_account);
    }
     async biz_dashboardverify(text){
        await expect(this.biz_password).toBeVisible({timeout:15000});
        await expect(this.biz_dashboard).toContainText(text);
    }


    

}