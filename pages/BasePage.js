import { expect } from "@playwright/test";

export class BasePage{
    /**@param {import('@playwright/test').Page} page */
    constructor(page){
        this.page = page;
    }

    //url
    async openapp(url){
        await this.page.goto(url);
    }

    async fill(element, text){
        await element.fill(text);
    }

    async goback(){
        await this.page.goback();
    }

   async click(element) {
        await element.waitFor({ state: 'visible', timeout: 15000 });
        await element.click();
    }

    /**@param {import('@playwright/test').Locator} element */
    async selectdropdown(element,text){
        await element.selectOption(text)
    }

    async scrolldown(){
        await this.page.evaluate(()=>{
            window.scrollBy(0,500);
        });
    }
    //alert
    async confirmalert(text){
        this.page.once("dialog",async dialog =>{
            expect(dialog.type()).toBe("confirm");
            expect(dialog.message()).toContain(text);
            await dialog.accept();
        })

    }
    
}

