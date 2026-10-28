import {createBdd} from "playwright-bdd"
import { LoginPage } from "../pages/LoginPage";
import { CreatePage } from "../pages/createPage";
import {ExplorePage} from "../pages/ExplorePage";
import { OverviewPage } from "../pages/OverviewPage";
import { MyBusinessPage } from "../pages/MyBusinessPage";

const {Given, When, Then, Before} = createBdd();

/**@type { LoginPage } */
let loginPage;

/**@type { CreatePage } */
let createPage;

/**@type { ExplorePage } */
let explorePage;

/**@type { OverviewPage } */
let overviewPage;

/**@type { MyBusinessPage } */
let mybusinessPage;

Before(async({ page }) =>{
    loginPage = new LoginPage(page);
    createPage = new CreatePage(page);
    explorePage = new ExplorePage(page);
    overviewPage = new OverviewPage(page);
    mybusinessPage = new MyBusinessPage(page);
})


Given('user navigates to infoz application', async ({}) => {
  await loginPage.browserlaunch("https://d2mojgetgp5xie.cloudfront.net")
});

When('user clicks on signin button', async ({}) => {
  await createPage.signin();
  
});

When('user clicks create account', async ({}) => {
  await createPage.newAccount();
  
});

When('user clicks business option', async ({}) => {
  await createPage.bizselect()
});

When('user enters the full name {string}', async ({}, fullname ) => {
  await createPage.register_name(fullname)
});

When('user enters the emailid {string}', async ({}, emailid) => {
  await createPage.register_email(emailid)
});

When('user enters the phone {string}', async ({}, contactnumber) => {
  await createPage.register_phone(contactnumber);
});

When('user enter the password {string}', async ({}, password) => {
  await createPage.register_password(password) 
});

When('user clicks the create account button', async ({}) => {
  await createPage.biz_createAccount()
});

Then('user account is created and redirected to the dashboard', async ({}) => {
  await createPage.biz_dashboardverify("Infoez")
});


//////////////////////////////////////////////////////////////////////////////////////////
When('user clicks on signin button in homepage', async ({}) => {
  await loginPage.appsignin()
});

When('user enter email {string} in email field', async ({}, email) => {
  await loginPage.emailfield(email)
  
});

When('user enter password {string} in password field', async ({}, password) => {
  await loginPage.passwordfield(password)
  
});

When('user clicks signin button', async ({}) => {
  await loginPage.singindashboard();
 
});
When('user clicks the profile icon', async ({}) => {
  await loginPage.profile();
 
});

When('user clicks the Business Dashboard option', async ({}) => {
  await loginPage.business();
  
});

Then('user is redirected to the Business Dashboard', async ({}) => {
  await loginPage.dashboardtitle("Business")
 
});
/////////////////////////////////////////////////////////////////////////

When('user clicks add business option', async ({}) => {
  await loginPage.addbusiness();
  
});

When('user enters business name {string}', async ({}, bizname) => {
  await loginPage.addname(bizname);
  
});

When('user enters description {string}', async ({}, description) => {
  await loginPage.adddescription(description);
  
});

When('user select the category from the dropdownbox option', async ({},options) => {
  await loginPage.select_category(options)
});

//When('user selects the price range from the dropdownbox option', async ({}) => {
 
//});
When('user enters city name {string}', async ({}, city) => {
  await loginPage.cityname(city);
  
});

When('user enters the address {string}', async ({}, bizaddress) => {
  await loginPage.address(bizaddress);
  
});

When('user enters the phone number {string}', async ({}, mobile) => {
  await loginPage.phone(mobile);
  
});

When('user enters the email id {string}', async ({}, emailfield) => {
  await loginPage.email(emailfield)
});

//When('user enters the website {string}', async ({}, arg) => {
 
//});
/////////////////////////////////////////////////////////////////////////////////
When('user enters the working hours {string}', async ({}, timing) => {
  await loginPage.hours(timing);
  
});

When('user enters the services provided {string}', async ({}, givenservices) => {
  await loginPage.services(givenservices);
  
});

When('user clicks use my location button to mark the location coordinates', async ({}) => {
  await loginPage.location();
});

When('user clicks create business button', async ({}) => {
  await loginPage.create(); 
});
//////////////////////////////////////////////////////////////////////////////////
When('user clicks Explore option', async ({}) => {
  await explorePage.explore();
  
});

When('user can view all {int} cards in the application where user can access all options displayed', async ({}, arg) => {
  await explorePage.header("Explore")
  
});
When('user clicks search option and enters {string}', async ({}, dish) => {
  await explorePage.searchoption(dish);
 // await explorePage.searchoption(dish);
  
});

When('user clicks search button', async ({}) => {
  await explorePage.searchbutton();
  
});
When('user enter {string} in search field', async ({}, explorecity) => {
  await explorePage.entercity(explorecity);
  await explorePage.searchbutton();
  
});

When('user is able to view all shops available Hyderabad', async ({}) => {
  await explorePage.displayexplore("VIDYASHARAM");
  
});
//////////////////////////////////////////////////////////////////////////////////////////
When('user clicks the all caterory dropdownbox in filter option', async ({}) => {
  await explorePage.filter_option();
 
});

When('user selects {string}', async ({}, Options) => {
  await explorePage.filter_selection(Options) 
  
});
When('user selects the sort by dropdown box {string}', async ({}, Sort_Options) => {
  await explorePage.Sort_by(Sort_Options)

  
});
Then('user selected options are displayed', async ({}) => {
  await explorePage.search_result("Bright Minds Academy");
});
///////////////////////////////////////////////////////////////////////////

When('user is able to view all business details like leads total reviews etc', async ({}) => {
  await overviewPage.overiew_verify("Business dashboard")
});

///////////////////////////////////////////////////////////////////////////
When('user clicks the my business option', async ({}) => {
  await mybusinessPage.mybusiness_click();
  
});

When('user clicks the edit option available on sun autoparts', async ({}) => {
   await mybusinessPage.EditButton();
 
});

When('user edit service options with {string}', async ({}, text) => {
  await mybusinessPage.Services(text);
});

When('user clicks save changes button', async ({}) => {
  await mybusinessPage.SaveChanges();
  
});

Then('user is again redirected to the dasboard', async ({}) => {
  await mybusinessPage.dashboard_mybiz();
  
});
/////////////////////////////////////////////////////////////////////////
When('user clicks lead option', async ({}) => {
  await mybusinessPage.leads();
  
});

Then('user is able to view all leads available', async ({}) => {
  await mybusinessPage.leads_assert("Leads")
  
});



