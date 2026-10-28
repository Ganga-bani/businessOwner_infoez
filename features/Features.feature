Feature: Infoez business login page 

Background: 

Given user navigates to infoz application
     Scenario: Create business login outline 
     When user clicks on signin button 
     When user clicks create account 
     And user clicks business option 
     And user enters the full name "<Full_Name>"
     And user enters the emailid "<Email>"
     And user enters the phone "<phone>"
     And user enter the password "<Password>"
     And user clicks the create account button 
     Then user account is created and redirected to the dashboard

     Examples:
         |  Full_Name    |     Email        |  phone    | Password  |
         | Dsouza Cafe   |  dsouza@gmail.com| 9789094232| Dsouza@123|
         |               |  dsouza@gmail.com| 9789094232| Dsouza@123|
         | Dsouza Cafe   |                  | 9789094232| Dsouza@123|
         | Dsouza Cafe   |  dsouza@gmail.com| 9789094232|           |
         |               |                  | 9789094232| Dsouza@123|
     
     Scenario: Create Business page 
     When user clicks on signin button 
     When user clicks create account 
     And user clicks business option 
     And user enters the full name "Novo Restaurant"
     And user enters the emailid "Novo@gmail.com"
     And user enters the phone "9789098786"
     And user enter the password "Novo@123"
     And user clicks the create account button 
     Then user account is created and redirected to the dashboard

     Scenario Outline: verify login using valid credentials 
     When user clicks on signin button in homepage 
     And user enter email "<Email>" in email field
     And user enter password "<Password>" in password field
     And user clicks signin button 

     Examples:
         |      Email        | Password |         
         | owner@infoez.com  |          | 
         |                   | Owner@123| 
         | owner@infoez.com  | Owner@123| 
         
    Scenario: Verify Dashboard
    When user clicks on signin button in homepage
    And user enter email "owner@infoez.com" in email field
    And user enter password "Owner@123" in password field
    And user clicks signin button 
    When user clicks the profile icon 
    And user clicks the Business Dashboard option
    Then user is redirected to the Business Dashboard   

    Scenario: verify add business 
    //caterory and price range and website 
    When user clicks on signin button in homepage
    And user enter email "owner@infoez.com" in email field
    And user enter password "Owner@123" in password field
    And user clicks signin button 
    And user clicks the profile icon 
    And user clicks the Business Dashboard option
    And user clicks add business option 
    And user enters business name "VIDYASHARAM"
    And user enters description "LEARN TO LEAD"
    And user enters city name "Chennai"
    And user enters the address "Navalur"
    And user enters the phone number "9789097674"
    And user enters the email id "owner.business@gmail.com"
    And user enters the working hours "Mon-Sun 9AM–9PM"
    And user enters the services provided "Special Tuition Undertaken"
    And user clicks use my location button to mark the location coordinates 
    And user clicks create business button 

    Scenario: Business Explore with entering dish name
    When user clicks on signin button in homepage
    And user enter email "owner@infoez.com" in email field
    And user enter password "Owner@123" in password field
    And user clicks signin button 
    And user clicks the profile icon 
    And user clicks the Business Dashboard option
    And user clicks Explore option
    And user can view all 28 cards in the application where user can access all options displayed 
    And user clicks search option and enters "vidyasharam" 
    And user clicks search button 
    And user enter "chennai" in search field 
    And user clicks search button 
    And user is able to view all shops available Hyderabad

    Scenario: In Explore Verify filter category option 
    When user clicks on signin button in homepage
    And user enter email "owner@infoez.com" in email field
    And user enter password "Owner@123" in password field
    And user clicks signin button 
    And user clicks the profile icon 
    And user clicks the Business Dashboard option
    And user clicks Explore option
    And user can view all 28 cards in the application where user can access all options displayed 
    And user clicks the all caterory dropdownbox in filter option 
    And user selects "<Options>" 
    And user selects the sort by dropdown box "<Sort_Options>"
    Then user selected options are displayed 
    
    Examples:
         |    Options    | Sort_Options |         
         |   Education   |  Top rated   | 
         
    Scenario: Verify Business Overview 
    When user clicks on signin button in homepage
    And user enter email "owner@infoez.com" in email field
    And user enter password "Owner@123" in password field
    And user clicks signin button 
    And user clicks the profile icon 
    And user clicks the Business Dashboard option   
    And user is able to view all business details like leads total reviews etc   

    Scenario: Verify My business Page 
    When user clicks on signin button in homepage
    And user enter email "Novo@gmail.com" in email field
    And user enter password "Novo@123" in password field
    And user clicks signin button 
    And user clicks the profile icon 
    And user clicks the Business Dashboard option
    And user clicks the my business option 
    And user clicks the edit option available on sun autoparts 
    And user edit service options with "all brands"
    And user clicks save changes button 
    Then user is again redirected to the dasboard 

    Scenario: Verify leads option 
    When user clicks on signin button in homepage
    And user enter email "Novo@gmail.com" in email field
    And user enter password "Novo@123" in password field
    And user clicks signin button 
    And user clicks lead option 
    Then user is able to view all leads available 

         
         



    
    

