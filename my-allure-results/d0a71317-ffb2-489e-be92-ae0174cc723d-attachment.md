# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\Features.feature.spec.js >> Infoez business login page >> verify login using valid credentials >> Example #3
- Location: .features-gen\features\Features.feature.spec.js:28:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//input[@id=\'password\']//button[@data-testid=\'login-submit-btn\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('//input[@id=\'password\']//button[@data-testid=\'login-submit-btn\']') with timeout 5000ms
  - waiting for locator('//input[@id=\'password\']//button[@data-testid=\'login-submit-btn\']')

```

```yaml
- banner:
  - link "Infoez Find Local":
    - /url: /
  - navigation:
    - link "Explore":
      - /url: /search
    - link "Near me":
      - /url: /map
    - link "How it works":
      - /url: /how-it-works
    - link "Pricing":
      - /url: /pricing
  - button "Sign in"
  - button "Get started"
- main:
  - heading "Sign in to Infoez" [level=1]
  - paragraph: Find local. Choose better.
  - text: Email
  - textbox "Email": owner@infoez.com
  - text: Password
  - textbox "Password"
  - button "Sign in"
  - paragraph:
    - text: No account?
    - link "Create one":
      - /url: /register
  - text: Demo accounts
  - button "Admin — admin@infoez.com / Admin@123"
  - button "Business Owner — owner@infoez.com / Owner@123"
  - button "Customer — customer@infoez.com / Customer@123"
- contentinfo:
  - text: Infoez
  - paragraph: Find Local. Choose Better. The trusted directory for verified local businesses and services.
  - text: Discover
  - list:
    - listitem:
      - link "All Businesses":
        - /url: /search
    - listitem:
      - link "Featured":
        - /url: /search?featured=true
    - listitem:
      - link "Top Rated":
        - /url: /search?sort=rating
  - text: For Business
  - list:
    - listitem:
      - link "Add your business":
        - /url: /register?role=business_owner
    - listitem:
      - link "Pricing plans":
        - /url: /pricing
    - listitem:
      - link "How claims work":
        - /url: /how-it-works
  - text: Company
  - list:
    - listitem:
      - link "How it works":
        - /url: /how-it-works
    - listitem:
      - link "Pricing":
        - /url: /pricing
    - listitem:
      - link "Contact":
        - /url: /login
  - paragraph: © 2026 Infoez. All rights reserved.
  - paragraph: Find Local. Choose Better.
- region "Notifications alt+T"
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | import { BasePage } from "./BasePage"
  3  | 
  4  | export class LoginPage extends BasePage{
  5  |     /**@param {import('@playwright/test').Page} page */
  6  |     constructor(page){
  7  |         super(page)
  8  |        this.app_signin_button = page.locator("//button[text()='Sign in']")
  9  |        this.app_email_button = page.locator("//input[@type='email']")
  10 |        this.app_password_button = page.locator("//input[@id='password']//button[@data-testid='login-submit-btn']")
  11 |        this.dashboard_signin = page.locator("//button[@data-testid='login-submit-btn']") 
  12 |        this.dashboard_welcomealert = page.locator("//div[text()='Welcome back!']")
  13 |     }
  14 |     async browserlaunch(URL){
  15 |         await this.openapp(URL) 
  16 |     }
  17 | 
  18 |     async appsignin(){
  19 |         await this.click(this.app_signin_button);
  20 |     }
  21 | 
  22 |     async emailfield(email){
  23 |         await expect(this.app_email_button).toBeVisible();
  24 |         await this.fill(this.app_email_button, email);
  25 |     }
  26 | 
  27 |     async passwordfield(password){
  28 |         await expect(this.app_password_button).toBeVisible();
  29 |         await this.fill(this.app_password_button, password);
> 30 |     }
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  31 | 
  32 |     async singindashboard(){
  33 |         await expect(this.dashboard_signin).toBeVisible();
  34 |         await this.click(this.dashboard_signin);
  35 |     }
  36 | 
  37 | }
```