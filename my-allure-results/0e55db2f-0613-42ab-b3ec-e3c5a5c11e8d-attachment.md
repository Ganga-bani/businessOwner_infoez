# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\Features.feature.spec.js >> Infoez business login page >> Business Explore with entering dish name
- Location: .features-gen\features\Features.feature.spec.js:141:7

# Error details

```
TypeError: loginPage.explore is not a function
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
          - link [ref=e15] [cursor=pointer]:
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
        - complementary [ref=e26]:
          - link [ref=e27] [cursor=pointer]:
            - /url: /business/dashboard
            - text: Overview
          - link [ref=e33] [cursor=pointer]:
            - /url: /business/dashboard/businesses
            - text: My Businesses
          - link [ref=e39] [cursor=pointer]:
            - /url: /business/dashboard/leads
            - text: Leads
          - link [ref=e43] [cursor=pointer]:
            - /url: /business/dashboard/new
            - text: Add Business
        - generic [ref=e46]:
          - generic [ref=e47]: Overview
          - heading [level=1] [ref=e48]: Business dashboard
          - generic [ref=e49]:
            - generic [ref=e50]:
              - generic [ref=e51]: Businesses
              - generic [ref=e58]: "0"
            - generic [ref=e59]:
              - generic [ref=e60]: Leads
              - generic [ref=e67]: "0"
            - generic [ref=e68]:
              - generic [ref=e69]: Total reviews
              - generic [ref=e73]: "0"
            - generic [ref=e74]:
              - generic [ref=e75]: Total views
              - generic [ref=e80]: "0"
          - generic [ref=e81]:
            - generic [ref=e82]:
              - generic [ref=e83]: Your businesses
              - paragraph [ref=e85]: No businesses yet.
            - generic [ref=e86]:
              - generic [ref=e87]: Recent leads
              - paragraph [ref=e89]: No leads yet.
    - contentinfo [aria-hidden] [ref=e90]:
      - generic [ref=e91]:
        - generic [ref=e92]:
          - generic [ref=e93]: Infoez
          - paragraph [ref=e99]: Find Local. Choose Better. The trusted directory for verified local businesses and services.
        - generic [ref=e100]:
          - generic [ref=e101]: Discover
          - list [ref=e102]:
            - listitem [ref=e103]:
              - link [ref=e104] [cursor=pointer]:
                - /url: /search
                - text: All Businesses
            - listitem [ref=e105]:
              - link [ref=e106] [cursor=pointer]:
                - /url: /search?featured=true
                - text: Featured
            - listitem [ref=e107]:
              - link [ref=e108] [cursor=pointer]:
                - /url: /search?sort=rating
                - text: Top Rated
        - generic [ref=e109]:
          - generic [ref=e110]: For Business
          - list [ref=e111]:
            - listitem [ref=e112]:
              - link [ref=e113] [cursor=pointer]:
                - /url: /register?role=business_owner
                - text: Add your business
            - listitem [ref=e114]:
              - link [ref=e115] [cursor=pointer]:
                - /url: /pricing
                - text: Pricing plans
            - listitem [ref=e116]:
              - link [ref=e117] [cursor=pointer]:
                - /url: /how-it-works
                - text: How claims work
        - generic [ref=e118]:
          - generic [ref=e119]: Company
          - list [ref=e120]:
            - listitem [ref=e121]:
              - link [ref=e122] [cursor=pointer]:
                - /url: /how-it-works
                - text: How it works
            - listitem [ref=e123]:
              - link [ref=e124] [cursor=pointer]:
                - /url: /pricing
                - text: Pricing
            - listitem [ref=e125]:
              - link [ref=e126] [cursor=pointer]:
                - /url: /business/dashboard
                - text: Contact
      - generic [ref=e128]:
        - paragraph [ref=e129]: © 2026 Infoez. All rights reserved.
        - paragraph [ref=e130]: Find Local. Choose Better.
    - region "Notifications alt+T":
      - list:
        - listitem [ref=e131]:
          - generic [ref=e135]: Welcome back!
  - menu "R Ravi" [ref=e138]:
    - generic [ref=e139]:
      - generic [ref=e140]: Signed in as
      - generic [ref=e141]: owner@infoez.com
      - generic [ref=e142]: business owner
    - separator [ref=e143]
    - menuitem "Profile" [ref=e144]
    - menuitem "Favorites" [ref=e148]
    - menuitem "My Reviews" [ref=e151]
    - menuitem "My Enquiries" [ref=e154]
    - menuitem "Notifications" [ref=e157]
    - menuitem "Subscription" [ref=e161]
    - separator [ref=e165]
    - menuitem "Business Dashboard" [active] [ref=e166]
    - separator [ref=e172]
    - menuitem "Log out" [ref=e173]
```

# Test source

```ts
  66  | 
  67  | //////////////////////////////////////////////////////////////////////////////////////////
  68  | When('user clicks on signin button in homepage', async ({}) => {
  69  |   await loginPage.appsignin()
  70  | });
  71  | 
  72  | When('user enter email {string} in email field', async ({}, email) => {
  73  |   await loginPage.emailfield(email)
  74  |   
  75  | });
  76  | 
  77  | When('user enter password {string} in password field', async ({}, password) => {
  78  |   await loginPage.passwordfield(password)
  79  |   
  80  | });
  81  | 
  82  | When('user clicks signin button', async ({}) => {
  83  |   await loginPage.singindashboard();
  84  |  
  85  | });
  86  | When('user clicks the profile icon', async ({}) => {
  87  |   await loginPage.profile();
  88  |  
  89  | });
  90  | 
  91  | When('user clicks the Business Dashboard option', async ({}) => {
  92  |   await loginPage.business();
  93  |   
  94  | });
  95  | 
  96  | Then('user is redirected to the Business Dashboard', async ({}) => {
  97  |   await loginPage.dashboardtitle("Business")
  98  |  
  99  | });
  100 | /////////////////////////////////////////////////////////////////////////
  101 | 
  102 | When('user clicks add business option', async ({}) => {
  103 |   await loginPage.addbusiness();
  104 |   
  105 | });
  106 | 
  107 | When('user enters business name {string}', async ({}, bizname) => {
  108 |   await loginPage.addname(bizname);
  109 |   
  110 | });
  111 | 
  112 | When('user enters description {string}', async ({}, description) => {
  113 |   await loginPage.adddescription(description);
  114 |   
  115 | });
  116 | 
  117 | When('user select the category from the dropdownbox option', async ({},options) => {
  118 |   await loginPage.select_category(options)
  119 | });
  120 | 
  121 | //When('user selects the price range from the dropdownbox option', async ({}) => {
  122 |  
  123 | //});
  124 | When('user enters city name {string}', async ({}, city) => {
  125 |   await loginPage.cityname(city);
  126 |   
  127 | });
  128 | 
  129 | When('user enters the address {string}', async ({}, bizaddress) => {
  130 |   await loginPage.address(bizaddress);
  131 |   
  132 | });
  133 | 
  134 | When('user enters the phone number {string}', async ({}, mobile) => {
  135 |   await loginPage.phone(mobile);
  136 |   
  137 | });
  138 | 
  139 | When('user enters the email id {string}', async ({}, emailfield) => {
  140 |   await loginPage.email(emailfield)
  141 | });
  142 | 
  143 | //When('user enters the website {string}', async ({}, arg) => {
  144 |  
  145 | //});
  146 | /////////////////////////////////////////////////////////////////////////////////
  147 | When('user enters the working hours {string}', async ({}, timing) => {
  148 |   await loginPage.hours(timing);
  149 |   
  150 | });
  151 | 
  152 | When('user enters the services provided {string}', async ({}, givenservices) => {
  153 |   await loginPage.services(givenservices);
  154 |   
  155 | });
  156 | 
  157 | When('user clicks use my location button to mark the location coordinates', async ({}) => {
  158 |   await loginPage.location();
  159 | });
  160 | 
  161 | When('user clicks create business button', async ({}) => {
  162 |   await loginPage.create(); 
  163 | });
  164 | //////////////////////////////////////////////////////////////////////////////////
  165 | When('user clicks Explore option', async ({}) => {
> 166 |   await loginPage.explore();
      |                   ^ TypeError: loginPage.explore is not a function
  167 |   
  168 | });
  169 | 
  170 | When('user can view all {int} cards in the application where user can access all options displayed', async ({}, arg) => {
  171 |   await loginPage.header("Explore")
  172 |   
  173 | });
  174 | When('user clicks search option and enters {string}', async ({}, dish) => {
  175 |   await loginPage.searchoption();
  176 |   await loginPage.searchoption(dish);
  177 |   
  178 | });
  179 | 
  180 | When('user clicks search button', async ({}) => {
  181 |   await loginPage.searchbutton();
  182 |   
  183 | });
  184 | When('user enter {string} in search field', async ({}, explorecity) => {
  185 |   await loginPage.entercity(explorecity);
  186 |   await loginPage.searchbutton();
  187 |   
  188 | });
  189 | 
  190 | When('user is able to view all shops available Hyderabad', async ({}) => {
  191 |   await loginPage.displayexplore("Naga Biryani House");
  192 |   
  193 | });
  194 | 
  195 | 
  196 | 
  197 | 
```