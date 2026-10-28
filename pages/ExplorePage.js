import { expect } from "@playwright/test";
import { BasePage } from "./BasePage"

export class ExplorePage extends BasePage{
    /**@param {import('@playwright/test').Page} page */
    constructor(page){
        super(page)
       this.add_explore = page.locator("//a[text()='Explore']")
       this.header_explore = page.locator("//div[@class='eyebrow']")
       this.search_option = page.locator("//input[@data-testid='search-query-input']")
       this.search_button = page.locator("//button[@data-testid='search-submit-btn']")
       this.Explore_city = page.locator("//input[@data-testid='search-location-input']")
       this.displayed_city = page.locator("(//h3[text()='VIDYASHARAM'])[3]")

       this.explore_filter = page.locator("//button[@data-testid='filter-category']")
       this.filter_result = page.locator("//h3[text()='Bright Minds Academy']")
       this.sortby_filter = page.locator("//button[@data-testid='filter-sort']")


    }

    async explore(){
        await expect(this.add_explore).toBeVisible({timeout:15000});
        await this.click(this.add_explore);
    }
    async header(text){
        await expect(this.header_explore).toContainText(text);

    }
     async searchoption(text){
        await this.click(this.search_option);
        await this.fill(this.search_option,text);
        await expect(this.search_option).toBeVisible({timeout:10000});
    }
    async searchbutton(){
        await this.click(this.search_button);
        await expect(this.search_button).toBeVisible({timeout:10000});
    }
    async entercity(text){
      //  await expect(this.Explore_city).toBeVisible({timeout:10000});
        await this.fill(this.Explore_city,text)
    }
    async displayexplore(text){
        await expect(this.displayed_city).toContainText(text);
    }
    async filter_option(){
        await expect(this.explore_filter).toBeVisible({timeout:10000});
        await this.click(this.explore_filter);
    }
    async filter_selection(Options){
        await expect(this.explore_filter).toBeVisible({timeout:10000});
        await this.selectdropdown(this.explore_filter,Options)
    }
    async Sort_by(Sort_Options){
        await expect(this.sortby_filter).toBeVisible({timeout:10000});
        await this.selectdropdown(this.sortby_filter,Sort_Options)
    }
    async search_result(text){
    await expect(this.filter_result).toContainText(text);
    }
 
}