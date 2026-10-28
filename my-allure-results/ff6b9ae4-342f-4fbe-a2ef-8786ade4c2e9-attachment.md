# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\Features.feature.spec.js >> Infoez business login page >> verify login using valid credentials >> Example #1
- Location: .features-gen\features\Features.feature.spec.js:23:9

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://d2mojgetgp5xie.cloudfront.net/", waiting until "load"

```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | 
  3  | export class BasePage{
  4  |     /**@param {import('@playwright/test').Page} page */
  5  |     constructor(page){
  6  |         this.page = page;
  7  |     }
  8  | 
  9  |     //url
  10 |     async openapp(url){
> 11 |         await this.page.goto(url);
     |                         ^ Error: page.goto: Target page, context or browser has been closed
  12 |     }
  13 | 
  14 |     async fill(element, text){
  15 |         await element.fill(text);
  16 |     }
  17 | 
  18 |    async click(element) {
  19 |         await element.waitFor({ state: 'visible', timeout: 15000 });
  20 |         await element.click();
  21 |     }
  22 |     /**@param {import('@playwright/test').Locator} element */
  23 |     async selectdropdown(element,text){
  24 |         await element.click();
  25 |         await this.page.getByText(text,{exact:true}).click(); 
  26 |     }
  27 |     
  28 | }
  29 | 
  30 | 
```