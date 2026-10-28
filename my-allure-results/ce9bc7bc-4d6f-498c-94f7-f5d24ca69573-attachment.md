# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\Features.feature.spec.js >> Infoez business login page >> verify add business
- Location: .features-gen\features\Features.feature.spec.js:45:7

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Education', { exact: true }) resolved to 2 elements:
    1) <option value="45f66da0-93e0-49e5-80c9-38e001c94b65">Education</option> aka locator('select').first()
    2) <span id="radix-:rq:">Education</span> aka getByRole('listbox').getByText('Education')

Call log:
  - waiting for getByText('Education', { exact: true })

```

# Page snapshot

```yaml
- generic:
  - generic:
    - generic:
      - banner [aria-hidden]:
        - generic:
          - link:
            - /url: /
            - generic:
              - generic: Infoez
              - generic: Find Local
          - navigation:
            - link:
              - /url: /search
              - text: Explore
            - link:
              - /url: /map
              - text: Near me
            - link:
              - /url: /how-it-works
              - text: How it works
            - link:
              - /url: /pricing
              - text: Pricing
          - generic:
            - button:
              - generic: R
              - generic: Ravi
      - main [aria-hidden]:
        - generic:
          - complementary:
            - link:
              - /url: /business/dashboard
              - text: Overview
            - link:
              - /url: /business/dashboard/businesses
              - text: My Businesses
            - link:
              - /url: /business/dashboard/leads
              - text: Leads
            - link:
              - /url: /business/dashboard/new
              - text: Add Business
          - generic:
            - generic:
              - heading [level=1]: Add a business
              - generic:
                - generic:
                  - text: Business name
                  - textbox: VIDYASHARAM
                - generic:
                  - text: Description
                  - textbox: LEARN TO LEAD
                - generic:
                  - text: Category
                  - combobox [expanded]:
                    - generic: Select category
                  - combobox [aria-hidden]
                - generic:
                  - text: Price range
                  - combobox:
                    - generic: $$
                  - combobox [aria-hidden]
                - generic:
                  - text: City
                  - textbox
                - generic:
                  - text: Address
                  - textbox
                - generic:
                  - text: Phone
                  - textbox
                - generic:
                  - text: Email
                  - textbox
                - generic:
                  - text: Website
                  - textbox
                - generic:
                  - text: Hours
                  - textbox:
                    - /placeholder: Mon-Sun 9AM–9PM
                - generic:
                  - text: Services (comma separated)
                  - textbox:
                    - /placeholder: Haircut, Coloring, Bridal
                - generic:
                  - generic:
                    - generic:
                      - text: Location coordinates (optional)
                      - paragraph: Helps customers find you on the map & near-me search.
                    - button: Use my location
                  - generic:
                    - spinbutton
                    - spinbutton
                - generic:
                  - text: Photos
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic: Drag & drop photos here
                          - paragraph: JPG, PNG, WEBP — up to 8MB each · Max 8
                        - generic:
                          - button: Choose files
                          - button: Use camera
                - generic:
                  - button: Create business
                  - paragraph: New listings require admin approval before going live.
      - contentinfo [aria-hidden]:
        - generic:
          - generic:
            - generic: Infoez
            - paragraph: Find Local. Choose Better. The trusted directory for verified local businesses and services.
          - generic:
            - generic: Discover
            - list:
              - listitem:
                - link:
                  - /url: /search
                  - text: All Businesses
              - listitem:
                - link:
                  - /url: /search?featured=true
                  - text: Featured
              - listitem:
                - link:
                  - /url: /search?sort=rating
                  - text: Top Rated
          - generic:
            - generic: For Business
            - list:
              - listitem:
                - link:
                  - /url: /register?role=business_owner
                  - text: Add your business
              - listitem:
                - link:
                  - /url: /pricing
                  - text: Pricing plans
              - listitem:
                - link:
                  - /url: /how-it-works
                  - text: How claims work
          - generic:
            - generic: Company
            - list:
              - listitem:
                - link:
                  - /url: /how-it-works
                  - text: How it works
              - listitem:
                - link:
                  - /url: /pricing
                  - text: Pricing
              - listitem:
                - link:
                  - /url: /business/dashboard/new
                  - text: Contact
        - generic:
          - generic:
            - paragraph: © 2026 Infoez. All rights reserved.
            - paragraph: Find Local. Choose Better.
      - region "Notifications alt+T"
  - listbox [ref=e1]:
    - option "Restaurants" [active] [ref=e2]
    - option "Cafes & Bakeries" [ref=e5]
    - option "Beauty & Spa" [ref=e8]
    - option "Fitness & Wellness" [ref=e11]
    - option "Auto & Repair" [ref=e14]
    - option "Health & Medical" [ref=e17]
    - option "Retail & Shopping" [ref=e20]
    - option "Education" [ref=e23]
    - option "Professional" [ref=e26]
    - option "Beauty clinic" [ref=e29]
    - option "Peudjjte" [ref=e32]
    - option "981)_)_-+(((" [ref=e35]
    - option "Hh" [ref=e38]
    - option "Peudjkjte" [ref=e41]
    - option "Pmeudjkjte" [ref=e44]
    - option "Pet Care" [ref=e47]
    - option "Pet nnCare" [ref=e50]
    - option "Pect nnCare" [ref=e53]
    - 'option "{{name}}" [ref=e56]'
    - 'option "{{name}mm}" [ref=e59]'
    - 'option "{{bname}}" [ref=e62]'
    - 'option "{{namennnnn}}" [ref=e65]'
    - option "Electronics" [ref=e68]
    - option "BULB" [ref=e71]
    - option "WOOD" [ref=e74]
    - option "SILVER" [ref=e77]
    - option "Parlour1" [ref=e80]
    - option "Parlour2" [ref=e83]
    - option "Parlour3" [ref=e86]
    - option "Parlour4" [ref=e89]
    - option "Bakeries" [ref=e92]
    - option "12345" [ref=e95]
    - option "Bakery123" [ref=e98]
    - 'option "{{postName}}" [ref=e101]'
    - option "parlour5" [ref=e104]
    - option "parlour6" [ref=e107]
    - option "parlour7" [ref=e110]
    - option "parlour8" [ref=e113]
    - option "parlour9" [ref=e116]
    - option "parlour10" [ref=e119]
    - option "parl" [ref=e122]
    - option "parlo" [ref=e125]
    - option "parll" [ref=e128]
    - option "parloo" [ref=e131]
    - option "parlouu" [ref=e134]
    - option "parlll" [ref=e137]
    - option "parlooo" [ref=e140]
    - option "Cosmetice" [ref=e143]
    - option "Tea_Shop" [ref=e146]
    - option "Beaty Saloon" [ref=e149]
    - option "Hair Saloon" [ref=e152]
    - option "Nail art" [ref=e155]
    - option "Nature" [ref=e158]
    - option "Category QA MAQQWQ" [ref=e161]
    - option "Category QA EQQTRO" [ref=e164]
    - option "Category QA DVNEQT" [ref=e167]
    - option "Category QA UQAKZU" [ref=e170]
    - option "Category QA AKUQQQ" [ref=e173]
    - option "Category QA QQMZOF" [ref=e176]
    - option "Category QA GYFJSV" [ref=e179]
    - option "Category QA LIHQRQ" [ref=e182]
    - option "Iron" [ref=e185]
    - option "Statue QA NFKOVC" [ref=e188]
    - option "Nature QA BEQQQR" [ref=e191]
    - option "Fans" [ref=e194]
    - option "Woodwork" [ref=e197]
    - option "Robotics" [ref=e200]
    - option "H27382" [ref=e203]
    - option "Magic Chikken" [ref=e206]
    - option "SS Crackers" [ref=e209]
    - option "sssssssssssssssssssssssssssssssssssssssssssssshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhdddddddddddddddddddddddddddddddrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrriiiiiiiiiiiiiiiiuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu" [ref=e212]
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
  15 |         await element.fill(text);
  16 |     }
  17 | 
  18 |    async click(element) {
  19 |         await element.waitFor({ state: 'visible', timeout: 15000 });
  20 |         await element.click();
  21 |     }
  22 |     
  23 |     async selectdropdown(locator,value){
  24 |         await locator.click();
  25 |         await this.page.getByText(value, {exact: true}).click();
  26 |         
  27 |     }
  28 | }
  29 | 
  30 | 
     |        ^ Error: locator.click: Error: strict mode violation: getByText('Education', { exact: true }) resolved to 2 elements:
```