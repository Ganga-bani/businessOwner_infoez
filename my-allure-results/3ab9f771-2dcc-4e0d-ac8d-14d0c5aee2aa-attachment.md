# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\Features.feature.spec.js >> Infoez business login page >> Business Explore with entering dish name
- Location: .features-gen\features\Features.feature.spec.js:65:7

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link "Infoez Find Local" [ref=e6] [cursor=pointer]:
        - /url: /
        - generic [ref=e11]:
          - generic [ref=e12]: Infoez
          - generic [ref=e13]: Find Local
      - navigation [ref=e14]:
        - link "Explore" [ref=e15] [cursor=pointer]:
          - /url: /search
        - link "Near me" [ref=e16] [cursor=pointer]:
          - /url: /map
        - link "How it works" [ref=e17] [cursor=pointer]:
          - /url: /how-it-works
        - link "Pricing" [ref=e18] [cursor=pointer]:
          - /url: /pricing
      - button "R Ravi" [ref=e20] [cursor=pointer]:
        - generic [ref=e21]: R
        - generic [ref=e23]: Ravi
  - main [ref=e24]:
    - generic [ref=e25]:
      - generic [ref=e26]:
        - generic [ref=e27]:
          - generic [ref=e28]: Explore
          - heading "Businesses" [level=1] [ref=e29]
        - generic [ref=e30]:
          - textbox "Search…" [active] [ref=e35]
          - textbox "City" [ref=e40]
          - button "Search" [ref=e41] [cursor=pointer]
      - complementary [ref=e43]:
        - generic [ref=e44]: Filters
        - generic [ref=e47]:
          - generic [ref=e48]:
            - generic [ref=e49]: Category
            - combobox [ref=e50] [cursor=pointer]:
              - generic: All categories
          - generic [ref=e53]:
            - generic [ref=e54]: Sort by
            - combobox [ref=e55] [cursor=pointer]:
              - generic: Recently added
          - generic [ref=e58]:
            - generic [ref=e59]: Min rating
            - combobox [ref=e60] [cursor=pointer]:
              - generic: Any
          - generic [ref=e63] [cursor=pointer]:
            - checkbox "Verified only" [ref=e64]
            - text: Verified only
  - contentinfo [ref=e103]:
    - generic [ref=e104]:
      - generic [ref=e105]:
        - generic [ref=e106]: Infoez
        - paragraph [ref=e112]: Find Local. Choose Better. The trusted directory for verified local businesses and services.
      - generic [ref=e113]:
        - generic [ref=e114]: Discover
        - list [ref=e115]:
          - listitem [ref=e116]:
            - link "All Businesses" [ref=e117] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e118]:
            - link "Featured" [ref=e119] [cursor=pointer]:
              - /url: /search?featured=true
          - listitem [ref=e120]:
            - link "Top Rated" [ref=e121] [cursor=pointer]:
              - /url: /search?sort=rating
      - generic [ref=e122]:
        - generic [ref=e123]: For Business
        - list [ref=e124]:
          - listitem [ref=e125]:
            - link "Add your business" [ref=e126] [cursor=pointer]:
              - /url: /register?role=business_owner
          - listitem [ref=e127]:
            - link "Pricing plans" [ref=e128] [cursor=pointer]:
              - /url: /pricing
          - listitem [ref=e129]:
            - link "How claims work" [ref=e130] [cursor=pointer]:
              - /url: /how-it-works
      - generic [ref=e131]:
        - generic [ref=e132]: Company
        - list [ref=e133]:
          - listitem [ref=e134]:
            - link "How it works" [ref=e135] [cursor=pointer]:
              - /url: /how-it-works
          - listitem [ref=e136]:
            - link "Pricing" [ref=e137] [cursor=pointer]:
              - /url: /pricing
          - listitem [ref=e138]:
            - link "Contact" [ref=e139] [cursor=pointer]:
              - /url: /search
    - generic [ref=e141]:
      - paragraph [ref=e142]: © 2026 Infoez. All rights reserved.
      - paragraph [ref=e143]: Find Local. Choose Better.
  - region "Notifications alt+T":
    - list:
      - listitem [ref=e144]:
        - generic [ref=e148]: Welcome back!
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
  11 |         await this.page.goto(url);
  12 |     }
  13 | 
  14 |     async fill(element, text){
> 15 |         await element.fill(text);
     |                       ^ Error: locator.fill: value: expected string, got undefined
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