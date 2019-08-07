@GoogleSearch @test
Feature: Google Search
  As a web user
  I want to be able to register
  So that I can make purchase

   Scenario: Work experience registration
     Given i'm on google page
     And i navigate to "URL" to search for online store
     And i click on "sign in" button to login
     And i enter valid "Email Address" and "Password"
     And i clicked on "Sign in" button
     And i click on "Dresses" section to view the product
     And i click on "summer Dresses" to select desired dress
     And i click on "printed summer dress" to select desired shirt
     And i click on "Quantity" to select two dresses
     And i click on "size" to choose medium dress
     And i click on "White" to select the colour of dress
     And i click on "Add to cart" to add the item to basket
     And i click on "proceed to checkout" to exit the basket
     And i click on "proceed to checkout" to exit summary
     And i type "All for you" in the comment box
     And i click on "proceed to checkout" to exit Address
     And i check the "Terms of Service" to accept condition
     And i click on "proceed to checkout" to exit Shipping
     And "Payment page" is displayed
     When i click on "pay by check" button to make payment
     Then i click on "confirm my order" to complete the transaction


