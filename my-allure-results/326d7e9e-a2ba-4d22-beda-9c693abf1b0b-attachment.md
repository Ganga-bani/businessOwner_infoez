# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\Features.feature.spec.js >> Infoez business login page >> Business Explore with city name
- Location: .features-gen\features\Features.feature.spec.js:78:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//input[@data-testid=\'search-location-input\']')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('//input[@data-testid=\'search-location-input\']') with timeout 10000ms
  - waiting for locator('//input[@data-testid=\'search-location-input\']')

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
  - button "R Ravi"
- main:
  - complementary:
    - link "Overview":
      - /url: /business/dashboard
    - link "My Businesses":
      - /url: /business/dashboard/businesses
    - link "Leads":
      - /url: /business/dashboard/leads
    - link "Add Business":
      - /url: /business/dashboard/new
  - text: Overview
  - heading "Business dashboard" [level=1]
  - text: Businesses 200 Leads 12 Total reviews 3 Total views 1620 Your businesses Bloom Beauty Studio 5.0 HomeFix Pro 0.0 QuickShift Auto 0.0 Aarogya Clinic 5.0 Bright Minds Academy 0.0 Recent leads Ravi Kumar → Petal & Pour hlo Ravi Kumar → Petal & Pour xdcdcecs Customer → Bloom Beauty Studio I would like to know more about your services. Priya Sharma → Aarogya Clinic I would like to know more about your services. Ravi Kumar → Petal & Pour Know more
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
        - /url: /business/dashboard
  - paragraph: © 2026 Infoez. All rights reserved.
  - paragraph: Find Local. Choose Better.
- region "Notifications alt+T"
```

# Test source

```ts
  38  |     }
  39  |     async browserlaunch(URL){
  40  |         await this.openapp(URL) 
  41  |     }
  42  | 
  43  |     async appsignin(){
  44  |         await expect(this.app_signin_button).toBeVisible({timeout:10000});
  45  |         await this.click(this.app_signin_button);
  46  |     }
  47  | 
  48  |     async emailfield(email){
  49  |         await expect(this.app_email_button).toBeVisible({timeout:10000});
  50  |         await this.fill(this.app_email_button, email);
  51  |     }
  52  | 
  53  |     async passwordfield(password){
  54  |         await expect(this.app_password_button).toBeVisible({timeout:10000});
  55  |         await this.fill(this.app_password_button, password);
  56  |     }
  57  | 
  58  |     async singindashboard(){
  59  |         await expect(this.dashboard_signin).toBeVisible({timeout:10000});
  60  |         await this.click(this.dashboard_signin);
  61  |     }
  62  |     async profile(){
  63  |        // await expect(this.ravi_profile).toBeVisible({timeout:10000});
  64  |         await this.click(this.dashboard_profile);
  65  |     }
  66  |     async business(){
  67  |         await expect(this.business_dashboard).toBeVisible({timeout:10000});
  68  |         await this.click(this.business_dashboard);
  69  |     }
  70  |     async dashboardtitle(text){
  71  |         await expect(this.business_title).toBeVisible({timeout:10000});
  72  |         await expect(this.business_title).toContainText(text);
  73  |     }
  74  | 
  75  |     async addbusiness(){
  76  |         await this.click(this.add_business);
  77  |     }
  78  |      
  79  |     async addname(text){
  80  |         await this.fill(this.add_name,text)
  81  |     }
  82  |     async adddescription(text){
  83  |         await this.fill(this.add_description,text)
  84  |     }
  85  | 
  86  |     async category(text){
  87  |         await this.selectdropdown(this.category_dropdown,text);
  88  |     }
  89  | 
  90  |     async cityname(text){
  91  |         await expect(this.city_name).toBeVisible({timeout:10000});
  92  |         await this.fill(this.city_name,text)
  93  |     } 
  94  |     async address(text){
  95  |         await expect(this.add_address).toBeVisible({timeout:10000});
  96  |         await this.fill(this.add_address,text)
  97  |     } 
  98  |     async phone(text){
  99  |         await expect(this.add_phone).toBeVisible({timeout:10000});
  100 |         await this.fill(this.add_phone,text)
  101 |     } 
  102 |     async email(text){
  103 |         await expect(this.add_email).toBeVisible({timeout:10000});
  104 |         await this.fill(this.add_email,text)
  105 |     } 
  106 |     async hours(text){
  107 |         await expect(this.add_hour).toBeVisible({timeout:10000});
  108 |         await this.fill(this.add_hour,text)
  109 |     }
  110 |     async services(text){
  111 |         await expect(this.add_services).toBeVisible({timeout:10000});
  112 |         await this.fill(this.add_services,text)
  113 |     }
  114 |     async location(){
  115 |         await expect(this.add_location).toBeVisible({timeout:10000});
  116 |         await this.click(this.add_location);
  117 |     }
  118 |     async create(){
  119 |         await expect(this.add_create).toBeVisible({timeout:10000});
  120 |         await this.click(this.add_create);
  121 |     }
  122 |     async explore(){
  123 |         await this.click(this.add_explore);
  124 |     }
  125 |     async header(text){
  126 |         await expect(this.header_explore).toContainText(text);
  127 | 
  128 |     }
  129 |      async searchoption(text){
  130 |         await this.fill(this.search_option,text);
  131 |         await expect(this.search_option).toBeVisible({timeout:10000});
  132 |     }
  133 |     async searchbutton(){
  134 |         await this.click(this.search_button);
  135 |         await expect(this.search_button).toBeVisible({timeout:10000});
  136 |     }
  137 |     async entercity(text){
> 138 |         await expect(this.Explore_city).toBeVisible({timeout:10000});
      |                                         ^ Error: expect(locator).toBeVisible() failed
  139 |         await this.fill(this.Explore_city,text)
  140 |     }
  141 |     async displayexplore(text){
  142 |         await expect(this.displayed_city).toContainText(text);
  143 |     }
  144 | 
  145 | }
  146 | 
```