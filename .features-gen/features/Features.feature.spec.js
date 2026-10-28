// Generated from: features\Features.feature
import { test } from "playwright-bdd";

test.describe('Infoez business login page', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('user navigates to infoz application'); 
  });
  
  test.describe('Create business login outline', () => {

    test('Example #1', async ({ When, Then, And }) => { 
      await When('user clicks on signin button'); 
      await When('user clicks create account'); 
      await And('user clicks business option'); 
      await And('user enters the full name "Novo Restaurant"'); 
      await And('user enters the emailid "Novo@gmail.com"'); 
      await And('user enters the phone "9789098786"'); 
      await And('user enter the password "Novo@123"'); 
      await And('user clicks the create account button'); 
      await Then('user account is created and redirected to the dashboard'); 
    });

    test('Example #2', async ({ When, Then, And }) => { 
      await When('user clicks on signin button'); 
      await When('user clicks create account'); 
      await And('user clicks business option'); 
      await And('user enters the full name ""'); 
      await And('user enters the emailid "Novo@gmail.com"'); 
      await And('user enters the phone "9789098786"'); 
      await And('user enter the password "Novo@123"'); 
      await And('user clicks the create account button'); 
      await Then('user account is created and redirected to the dashboard'); 
    });

    test('Example #3', async ({ When, Then, And }) => { 
      await When('user clicks on signin button'); 
      await When('user clicks create account'); 
      await And('user clicks business option'); 
      await And('user enters the full name "Novo Restaurant"'); 
      await And('user enters the emailid ""'); 
      await And('user enters the phone "9789098786"'); 
      await And('user enter the password "Novo@123"'); 
      await And('user clicks the create account button'); 
      await Then('user account is created and redirected to the dashboard'); 
    });

    test('Example #4', async ({ When, Then, And }) => { 
      await When('user clicks on signin button'); 
      await When('user clicks create account'); 
      await And('user clicks business option'); 
      await And('user enters the full name "Novo Restaurant"'); 
      await And('user enters the emailid "Novo@gmail.com"'); 
      await And('user enters the phone "9789098786"'); 
      await And('user enter the password ""'); 
      await And('user clicks the create account button'); 
      await Then('user account is created and redirected to the dashboard'); 
    });

    test('Example #5', async ({ When, Then, And }) => { 
      await When('user clicks on signin button'); 
      await When('user clicks create account'); 
      await And('user clicks business option'); 
      await And('user enters the full name ""'); 
      await And('user enters the emailid ""'); 
      await And('user enters the phone "9789098786"'); 
      await And('user enter the password "Novo@123"'); 
      await And('user clicks the create account button'); 
      await Then('user account is created and redirected to the dashboard'); 
    });

  });

  test('Create Business page', async ({ When, Then, And }) => { 
    await When('user clicks on signin button'); 
    await When('user clicks create account'); 
    await And('user clicks business option'); 
    await And('user enters the full name "Novo Restaurant"'); 
    await And('user enters the emailid "Novo@gmail.com"'); 
    await And('user enters the phone "9789098786"'); 
    await And('user enter the password "Novo@123"'); 
    await And('user clicks the create account button'); 
    await Then('user account is created and redirected to the dashboard'); 
  });

  test.describe('verify login using valid credentials', () => {

    test('Example #1', async ({ When, And }) => { 
      await When('user clicks on signin button in homepage'); 
      await And('user enter email "owner@infoez.com" in email field'); 
      await And('user enter password "" in password field'); 
      await And('user clicks signin button'); 
    });

    test('Example #2', async ({ When, And }) => { 
      await When('user clicks on signin button in homepage'); 
      await And('user enter email "" in email field'); 
      await And('user enter password "Owner@123" in password field'); 
      await And('user clicks signin button'); 
    });

    test('Example #3', async ({ When, And }) => { 
      await When('user clicks on signin button in homepage'); 
      await And('user enter email "owner@infoez.com" in email field'); 
      await And('user enter password "Owner@123" in password field'); 
      await And('user clicks signin button'); 
    });

  });

  test('Verify Dashboard', async ({ When, Then, And }) => { 
    await When('user clicks on signin button in homepage'); 
    await And('user enter email "owner@infoez.com" in email field'); 
    await And('user enter password "Owner@123" in password field'); 
    await And('user clicks signin button'); 
    await When('user clicks the profile icon'); 
    await And('user clicks the Business Dashboard option'); 
    await Then('user is redirected to the Business Dashboard'); 
  });

  test('verify add business', async ({ When, And }) => { 
    await When('user clicks on signin button in homepage'); 
    await And('user enter email "owner@infoez.com" in email field'); 
    await And('user enter password "Owner@123" in password field'); 
    await And('user clicks signin button'); 
    await And('user clicks the profile icon'); 
    await And('user clicks the Business Dashboard option'); 
    await And('user clicks add business option'); 
    await And('user enters business name "VIDYASHARAM"'); 
    await And('user enters description "LEARN TO LEAD"'); 
    await And('user enters city name "Chennai"'); 
    await And('user enters the address "Navalur"'); 
    await And('user enters the phone number "9789097674"'); 
    await And('user enters the email id "owner.business@gmail.com"'); 
    await And('user enters the working hours "Mon-Sun 9AM–9PM"'); 
    await And('user enters the services provided "Special Tuition Undertaken"'); 
    await And('user clicks use my location button to mark the location coordinates'); 
    await And('user clicks create business button'); 
  });

  test('Business Explore with entering dish name', async ({ When, And }) => { 
    await When('user clicks on signin button in homepage'); 
    await And('user enter email "owner@infoez.com" in email field'); 
    await And('user enter password "Owner@123" in password field'); 
    await And('user clicks signin button'); 
    await And('user clicks the profile icon'); 
    await And('user clicks the Business Dashboard option'); 
    await And('user clicks Explore option'); 
    await And('user can view all 28 cards in the application where user can access all options displayed'); 
    await And('user clicks search option and enters "vidyasharam"'); 
    await And('user clicks search button'); 
    await And('user enter "chennai" in search field'); 
    await And('user clicks search button'); 
    await And('user is able to view all shops available Hyderabad'); 
  });

  test('In Explore Verify filter category option', async ({ When, Then, And }) => { 
    await When('user clicks on signin button in homepage'); 
    await And('user enter email "owner@infoez.com" in email field'); 
    await And('user enter password "Owner@123" in password field'); 
    await And('user clicks signin button'); 
    await And('user clicks the profile icon'); 
    await And('user clicks the Business Dashboard option'); 
    await And('user clicks Explore option'); 
    await And('user can view all 28 cards in the application where user can access all options displayed'); 
    await And('user clicks the all caterory dropdownbox in filter option'); 
    await And('user selects "Health & Medical"'); 
    await Then('user selected options are displayed'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Features.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to infoz application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user clicks on signin button","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user clicks create account","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And user clicks business option","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And user enters the full name \"Novo Restaurant\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Novo Restaurant\"","children":[{"start":27,"value":"Novo Restaurant","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user enters the emailid \"Novo@gmail.com\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Novo@gmail.com\"","children":[{"start":25,"value":"Novo@gmail.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And user enters the phone \"9789098786\"","stepMatchArguments":[{"group":{"start":22,"value":"\"9789098786\"","children":[{"start":23,"value":"9789098786","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user enter the password \"Novo@123\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Novo@123\"","children":[{"start":25,"value":"Novo@123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user clicks the create account button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then user account is created and redirected to the dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to infoz application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user clicks on signin button","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user clicks create account","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And user clicks business option","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And user enters the full name \"\"","stepMatchArguments":[{"group":{"start":26,"value":"\"\"","children":[{"start":27,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user enters the emailid \"Novo@gmail.com\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Novo@gmail.com\"","children":[{"start":25,"value":"Novo@gmail.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And user enters the phone \"9789098786\"","stepMatchArguments":[{"group":{"start":22,"value":"\"9789098786\"","children":[{"start":23,"value":"9789098786","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user enter the password \"Novo@123\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Novo@123\"","children":[{"start":25,"value":"Novo@123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user clicks the create account button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then user account is created and redirected to the dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to infoz application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user clicks on signin button","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user clicks create account","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And user clicks business option","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And user enters the full name \"Novo Restaurant\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Novo Restaurant\"","children":[{"start":27,"value":"Novo Restaurant","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user enters the emailid \"\"","stepMatchArguments":[{"group":{"start":24,"value":"\"\"","children":[{"start":25,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And user enters the phone \"9789098786\"","stepMatchArguments":[{"group":{"start":22,"value":"\"9789098786\"","children":[{"start":23,"value":"9789098786","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user enter the password \"Novo@123\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Novo@123\"","children":[{"start":25,"value":"Novo@123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user clicks the create account button","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then user account is created and redirected to the dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to infoz application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user clicks on signin button","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user clicks create account","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And user clicks business option","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And user enters the full name \"Novo Restaurant\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Novo Restaurant\"","children":[{"start":27,"value":"Novo Restaurant","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user enters the emailid \"Novo@gmail.com\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Novo@gmail.com\"","children":[{"start":25,"value":"Novo@gmail.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And user enters the phone \"9789098786\"","stepMatchArguments":[{"group":{"start":22,"value":"\"9789098786\"","children":[{"start":23,"value":"9789098786","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user enter the password \"\"","stepMatchArguments":[{"group":{"start":24,"value":"\"\"","children":[{"start":25,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":56,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user clicks the create account button","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then user account is created and redirected to the dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to infoz application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user clicks on signin button","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user clicks create account","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And user clicks business option","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And user enters the full name \"\"","stepMatchArguments":[{"group":{"start":26,"value":"\"\"","children":[{"start":27,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":65,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user enters the emailid \"\"","stepMatchArguments":[{"group":{"start":24,"value":"\"\"","children":[{"start":25,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":66,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And user enters the phone \"9789098786\"","stepMatchArguments":[{"group":{"start":22,"value":"\"9789098786\"","children":[{"start":23,"value":"9789098786","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":67,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user enter the password \"Novo@123\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Novo@123\"","children":[{"start":25,"value":"Novo@123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":68,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user clicks the create account button","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then user account is created and redirected to the dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":74,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to infoz application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When user clicks on signin button","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When user clicks create account","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"And user clicks business option","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"And user enters the full name \"Novo Restaurant\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Novo Restaurant\"","children":[{"start":27,"value":"Novo Restaurant","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":79,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And user enters the emailid \"Novo@gmail.com\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Novo@gmail.com\"","children":[{"start":25,"value":"Novo@gmail.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":80,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And user enters the phone \"9789098786\"","stepMatchArguments":[{"group":{"start":22,"value":"\"9789098786\"","children":[{"start":23,"value":"9789098786","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":81,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"And user enter the password \"Novo@123\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Novo@123\"","children":[{"start":25,"value":"Novo@123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":82,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"And user clicks the create account button","stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then user account is created and redirected to the dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":88,"pickleLine":44,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to infoz application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When user clicks on signin button in homepage","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"And user enter email \"owner@infoez.com\" in email field","stepMatchArguments":[{"group":{"start":17,"value":"\"owner@infoez.com\"","children":[{"start":18,"value":"owner@infoez.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":91,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"And user enter password \"\" in password field","stepMatchArguments":[{"group":{"start":20,"value":"\"\"","children":[{"start":21,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":92,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"And user clicks signin button","stepMatchArguments":[]}]},
  {"pwTestLine":95,"pickleLine":45,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to infoz application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When user clicks on signin button in homepage","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"And user enter email \"\" in email field","stepMatchArguments":[{"group":{"start":17,"value":"\"\"","children":[{"start":18,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":98,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"And user enter password \"Owner@123\" in password field","stepMatchArguments":[{"group":{"start":20,"value":"\"Owner@123\"","children":[{"start":21,"value":"Owner@123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":99,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"And user clicks signin button","stepMatchArguments":[]}]},
  {"pwTestLine":102,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to infoz application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When user clicks on signin button in homepage","stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"And user enter email \"owner@infoez.com\" in email field","stepMatchArguments":[{"group":{"start":17,"value":"\"owner@infoez.com\"","children":[{"start":18,"value":"owner@infoez.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":105,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"And user enter password \"Owner@123\" in password field","stepMatchArguments":[{"group":{"start":20,"value":"\"Owner@123\"","children":[{"start":21,"value":"Owner@123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":106,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"And user clicks signin button","stepMatchArguments":[]}]},
  {"pwTestLine":111,"pickleLine":48,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to infoz application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When user clicks on signin button in homepage","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"And user enter email \"owner@infoez.com\" in email field","stepMatchArguments":[{"group":{"start":17,"value":"\"owner@infoez.com\"","children":[{"start":18,"value":"owner@infoez.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":114,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"And user enter password \"Owner@123\" in password field","stepMatchArguments":[{"group":{"start":20,"value":"\"Owner@123\"","children":[{"start":21,"value":"Owner@123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":115,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"And user clicks signin button","stepMatchArguments":[]},{"pwStepLine":116,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"When user clicks the profile icon","stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"And user clicks the Business Dashboard option","stepMatchArguments":[]},{"pwStepLine":118,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then user is redirected to the Business Dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":121,"pickleLine":57,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to infoz application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"When user clicks on signin button in homepage","stepMatchArguments":[]},{"pwStepLine":123,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"And user enter email \"owner@infoez.com\" in email field","stepMatchArguments":[{"group":{"start":17,"value":"\"owner@infoez.com\"","children":[{"start":18,"value":"owner@infoez.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":124,"gherkinStepLine":61,"keywordType":"Action","textWithKeyword":"And user enter password \"Owner@123\" in password field","stepMatchArguments":[{"group":{"start":20,"value":"\"Owner@123\"","children":[{"start":21,"value":"Owner@123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":125,"gherkinStepLine":62,"keywordType":"Action","textWithKeyword":"And user clicks signin button","stepMatchArguments":[]},{"pwStepLine":126,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"And user clicks the profile icon","stepMatchArguments":[]},{"pwStepLine":127,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"And user clicks the Business Dashboard option","stepMatchArguments":[]},{"pwStepLine":128,"gherkinStepLine":65,"keywordType":"Action","textWithKeyword":"And user clicks add business option","stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"And user enters business name \"VIDYASHARAM\"","stepMatchArguments":[{"group":{"start":26,"value":"\"VIDYASHARAM\"","children":[{"start":27,"value":"VIDYASHARAM","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":130,"gherkinStepLine":67,"keywordType":"Action","textWithKeyword":"And user enters description \"LEARN TO LEAD\"","stepMatchArguments":[{"group":{"start":24,"value":"\"LEARN TO LEAD\"","children":[{"start":25,"value":"LEARN TO LEAD","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":131,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"And user enters city name \"Chennai\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Chennai\"","children":[{"start":23,"value":"Chennai","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":132,"gherkinStepLine":69,"keywordType":"Action","textWithKeyword":"And user enters the address \"Navalur\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Navalur\"","children":[{"start":25,"value":"Navalur","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":133,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"And user enters the phone number \"9789097674\"","stepMatchArguments":[{"group":{"start":29,"value":"\"9789097674\"","children":[{"start":30,"value":"9789097674","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":134,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"And user enters the email id \"owner.business@gmail.com\"","stepMatchArguments":[{"group":{"start":25,"value":"\"owner.business@gmail.com\"","children":[{"start":26,"value":"owner.business@gmail.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":135,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"And user enters the working hours \"Mon-Sun 9AM–9PM\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Mon-Sun 9AM–9PM\"","children":[{"start":31,"value":"Mon-Sun 9AM–9PM","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":136,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"And user enters the services provided \"Special Tuition Undertaken\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Special Tuition Undertaken\"","children":[{"start":35,"value":"Special Tuition Undertaken","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":137,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"And user clicks use my location button to mark the location coordinates","stepMatchArguments":[]},{"pwStepLine":138,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"And user clicks create business button","stepMatchArguments":[]}]},
  {"pwTestLine":141,"pickleLine":77,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to infoz application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":142,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When user clicks on signin button in homepage","stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":79,"keywordType":"Action","textWithKeyword":"And user enter email \"owner@infoez.com\" in email field","stepMatchArguments":[{"group":{"start":17,"value":"\"owner@infoez.com\"","children":[{"start":18,"value":"owner@infoez.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":144,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"And user enter password \"Owner@123\" in password field","stepMatchArguments":[{"group":{"start":20,"value":"\"Owner@123\"","children":[{"start":21,"value":"Owner@123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":145,"gherkinStepLine":81,"keywordType":"Action","textWithKeyword":"And user clicks signin button","stepMatchArguments":[]},{"pwStepLine":146,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"And user clicks the profile icon","stepMatchArguments":[]},{"pwStepLine":147,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"And user clicks the Business Dashboard option","stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":84,"keywordType":"Action","textWithKeyword":"And user clicks Explore option","stepMatchArguments":[]},{"pwStepLine":149,"gherkinStepLine":85,"keywordType":"Action","textWithKeyword":"And user can view all 28 cards in the application where user can access all options displayed","stepMatchArguments":[{"group":{"start":18,"value":"28"},"parameterTypeName":"int"}]},{"pwStepLine":150,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"And user clicks search option and enters \"vidyasharam\"","stepMatchArguments":[{"group":{"start":37,"value":"\"vidyasharam\"","children":[{"start":38,"value":"vidyasharam","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":151,"gherkinStepLine":87,"keywordType":"Action","textWithKeyword":"And user clicks search button","stepMatchArguments":[]},{"pwStepLine":152,"gherkinStepLine":88,"keywordType":"Action","textWithKeyword":"And user enter \"chennai\" in search field","stepMatchArguments":[{"group":{"start":11,"value":"\"chennai\"","children":[{"start":12,"value":"chennai","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":153,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"And user clicks search button","stepMatchArguments":[]},{"pwStepLine":154,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"And user is able to view all shops available Hyderabad","stepMatchArguments":[]}]},
  {"pwTestLine":157,"pickleLine":92,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to infoz application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":158,"gherkinStepLine":93,"keywordType":"Action","textWithKeyword":"When user clicks on signin button in homepage","stepMatchArguments":[]},{"pwStepLine":159,"gherkinStepLine":94,"keywordType":"Action","textWithKeyword":"And user enter email \"owner@infoez.com\" in email field","stepMatchArguments":[{"group":{"start":17,"value":"\"owner@infoez.com\"","children":[{"start":18,"value":"owner@infoez.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":160,"gherkinStepLine":95,"keywordType":"Action","textWithKeyword":"And user enter password \"Owner@123\" in password field","stepMatchArguments":[{"group":{"start":20,"value":"\"Owner@123\"","children":[{"start":21,"value":"Owner@123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":161,"gherkinStepLine":96,"keywordType":"Action","textWithKeyword":"And user clicks signin button","stepMatchArguments":[]},{"pwStepLine":162,"gherkinStepLine":97,"keywordType":"Action","textWithKeyword":"And user clicks the profile icon","stepMatchArguments":[]},{"pwStepLine":163,"gherkinStepLine":98,"keywordType":"Action","textWithKeyword":"And user clicks the Business Dashboard option","stepMatchArguments":[]},{"pwStepLine":164,"gherkinStepLine":99,"keywordType":"Action","textWithKeyword":"And user clicks Explore option","stepMatchArguments":[]},{"pwStepLine":165,"gherkinStepLine":100,"keywordType":"Action","textWithKeyword":"And user can view all 28 cards in the application where user can access all options displayed","stepMatchArguments":[{"group":{"start":18,"value":"28"},"parameterTypeName":"int"}]},{"pwStepLine":166,"gherkinStepLine":101,"keywordType":"Action","textWithKeyword":"And user clicks the all caterory dropdownbox in filter option","stepMatchArguments":[]},{"pwStepLine":167,"gherkinStepLine":102,"keywordType":"Action","textWithKeyword":"And user selects \"Health & Medical\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Health & Medical\"","children":[{"start":14,"value":"Health & Medical","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":168,"gherkinStepLine":103,"keywordType":"Outcome","textWithKeyword":"Then user selected options are displayed","stepMatchArguments":[]}]},
]; // bdd-data-end