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
- generic [ref=e1]:
  - generic [ref=e3]:
    - banner [aria-hidden] [ref=e4]:
      - generic [ref=e5]:
        - link [ref=e6] [cursor=pointer]:
          - /url: /
          - generic [ref=e11]:
            - generic [ref=e12]: Infoez
            - generic [ref=e13]: Find Local
        - navigation [ref=e14]:
          - link [active] [ref=e15] [cursor=pointer]:
            - /url: /search
            - text: Explore
          - link [ref=e16] [cursor=pointer]:
            - /url: /map
            - text: Near me
          - link [ref=e17] [cursor=pointer]:
            - /url: /how-it-works
            - text: How it works
          - link [ref=e18] [cursor=pointer]:
            - /url: /pricing
            - text: Pricing
        - button [ref=e20] [cursor=pointer]:
          - generic [ref=e21]: R
          - generic [ref=e23]: Ravi
    - main [aria-hidden] [ref=e24]:
      - generic [ref=e25]:
        - generic [ref=e26]:
          - generic [ref=e27]:
            - generic [ref=e28]: Explore
            - heading [level=1] [ref=e29]: Businesses
          - generic [ref=e30]:
            - textbox [ref=e35]:
              - /placeholder: Search…
            - textbox [ref=e40]:
              - /placeholder: City
            - button [ref=e41] [cursor=pointer]: Search
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
              - checkbox [ref=e64]
              - text: Verified only
    - contentinfo [aria-hidden] [ref=e103]:
      - generic [ref=e104]:
        - generic [ref=e105]:
          - generic [ref=e106]: Infoez
          - paragraph [ref=e112]: Find Local. Choose Better. The trusted directory for verified local businesses and services.
        - generic [ref=e113]:
          - generic [ref=e114]: Discover
          - list [ref=e115]:
            - listitem [ref=e116]:
              - link [ref=e117] [cursor=pointer]:
                - /url: /search
                - text: All Businesses
            - listitem [ref=e118]:
              - link [ref=e119] [cursor=pointer]:
                - /url: /search?featured=true
                - text: Featured
            - listitem [ref=e120]:
              - link [ref=e121] [cursor=pointer]:
                - /url: /search?sort=rating
                - text: Top Rated
        - generic [ref=e122]:
          - generic [ref=e123]: For Business
          - list [ref=e124]:
            - listitem [ref=e125]:
              - link [ref=e126] [cursor=pointer]:
                - /url: /register?role=business_owner
                - text: Add your business
            - listitem [ref=e127]:
              - link [ref=e128] [cursor=pointer]:
                - /url: /pricing
                - text: Pricing plans
            - listitem [ref=e129]:
              - link [ref=e130] [cursor=pointer]:
                - /url: /how-it-works
                - text: How claims work
        - generic [ref=e131]:
          - generic [ref=e132]: Company
          - list [ref=e133]:
            - listitem [ref=e134]:
              - link [ref=e135] [cursor=pointer]:
                - /url: /how-it-works
                - text: How it works
            - listitem [ref=e136]:
              - link [ref=e137] [cursor=pointer]:
                - /url: /pricing
                - text: Pricing
            - listitem [ref=e138]:
              - link [ref=e139] [cursor=pointer]:
                - /url: /search
                - text: Contact
      - generic [ref=e141]:
        - paragraph [ref=e142]: © 2026 Infoez. All rights reserved.
        - paragraph [ref=e143]: Find Local. Choose Better.
    - region "Notifications alt+T":
      - list:
        - listitem [ref=e144]:
          - generic [ref=e148]: Welcome back!
  - menu "R Ravi" [ref=e151]:
    - generic [ref=e152]:
      - generic [ref=e153]: Signed in as
      - generic [ref=e154]: owner@infoez.com
      - generic [ref=e155]: business owner
    - separator [ref=e156]
    - menuitem "Profile" [ref=e157]
    - menuitem "Favorites" [ref=e161]
    - menuitem "My Reviews" [ref=e164]
    - menuitem "My Enquiries" [ref=e167]
    - menuitem "Notifications" [ref=e170]
    - menuitem "Subscription" [ref=e174]
    - separator [ref=e178]
    - menuitem "Business Dashboard" [ref=e179]
    - separator [ref=e185]
    - menuitem "Log out" [ref=e186]
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