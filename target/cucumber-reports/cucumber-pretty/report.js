$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AutomationRegDemo.feature");
formatter.feature({
  "line": 2,
  "name": "Google Search",
  "description": "As a web user\r\nI want to be able to register\r\nSo that I can make purchase",
  "id": "google-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleSearch"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Work experience registration",
  "description": "",
  "id": "google-search;work-experience-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "i\u0027m on google page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "i navigate to \"URL\" to search for online store",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i click on \"sign in\" button to login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i enter valid \"Email Address\" and \"Password\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "i clicked on \"Sign in\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "i click on \"Dresses\" section to view the product",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "i click on \"summer Dresses\" to select desired dress",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "i click on \"printed summer dress\" to select desired shirt",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "i click on \"Quantity\" to select two dresses",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "i click on \"size\" to choose medium dress",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "i click on \"White\" to select the colour of dress",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i click on \"Add to cart\" to add the item to basket",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "i click on \"proceed to checkout\" to exit the basket",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "i click on \"proceed to checkout\" to exit summary",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "i type \"All for you\" in the comment box",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i click on \"proceed to checkout\" to exit Address",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i check the \"Terms of Service\" to accept condition",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i click on \"proceed to checkout\" to exit Shipping",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "\"Payment page\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i click on \"pay by check\" button to make payment",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "i click on \"confirm my order\" to complete the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "AutomationRegDemoSteps.i_m_on_google_page()"
});
formatter.result({
  "duration": 4023305674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 15
    }
  ],
  "location": "AutomationRegDemoSteps.i_navigate_to_to_search_for_online_store(String)"
});
formatter.result({
  "duration": 5535153421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in",
      "offset": 12
    }
  ],
  "location": "AutomationRegDemoSteps.i_click_on_button_to_login(String)"
});
formatter.result({
  "duration": 7416677899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email Address",
      "offset": 15
    },
    {
      "val": "Password",
      "offset": 35
    }
  ],
  "location": "AutomationRegDemoSteps.i_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 316298845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 14
    }
  ],
  "location": "AutomationRegDemoSteps.i_clicked_on_button(String)"
});
formatter.result({
  "duration": 16507705205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dresses",
      "offset": 12
    }
  ],
  "location": "AutomationRegDemoSteps.i_click_on_section_to_view_the_product(String)"
});
formatter.result({
  "duration": 10040885778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "summer Dresses",
      "offset": 12
    }
  ],
  "location": "AutomationRegDemoSteps.i_click_on_to_select_desired_dress(String)"
});
formatter.result({
  "duration": 2356312866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "printed summer dress",
      "offset": 12
    }
  ],
  "location": "AutomationRegDemoSteps.i_click_on_to_select_desired_shirt(String)"
});
formatter.result({
  "duration": 1748471517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Quantity",
      "offset": 12
    }
  ],
  "location": "AutomationRegDemoSteps.i_click_on_to_select_two_dresses(String)"
});
formatter.result({
  "duration": 175258012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "size",
      "offset": 12
    }
  ],
  "location": "AutomationRegDemoSteps.i_click_on_to_choose_medium_dress(String)"
});
formatter.result({
  "duration": 186475456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 12
    }
  ],
  "location": "AutomationRegDemoSteps.i_click_on_to_select_the_colour_of_dress(String)"
});
formatter.result({
  "duration": 108501713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add to cart",
      "offset": 12
    }
  ],
  "location": "AutomationRegDemoSteps.i_click_on_to_add_the_item_to_basket(String)"
});
formatter.result({
  "duration": 69674115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "proceed to checkout",
      "offset": 12
    }
  ],
  "location": "AutomationRegDemoSteps.i_click_on_to_exit_the_basket(String)"
});
formatter.result({
  "duration": 1862918436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "proceed to checkout",
      "offset": 12
    }
  ],
  "location": "AutomationRegDemoSteps.i_click_on_to_exit_summary(String)"
});
formatter.result({
  "duration": 1326761380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All for you",
      "offset": 8
    }
  ],
  "location": "AutomationRegDemoSteps.i_type_in_the_comment_box(String)"
});
formatter.result({
  "duration": 98344147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "proceed to checkout",
      "offset": 12
    }
  ],
  "location": "AutomationRegDemoSteps.i_click_on_to_exit_Address(String)"
});
formatter.result({
  "duration": 1148982643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Terms of Service",
      "offset": 13
    }
  ],
  "location": "AutomationRegDemoSteps.i_check_the_to_accept_condition(String)"
});
formatter.result({
  "duration": 88074096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "proceed to checkout",
      "offset": 12
    }
  ],
  "location": "AutomationRegDemoSteps.i_click_on_to_exit_Shipping(String)"
});
formatter.result({
  "duration": 1331501739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment page",
      "offset": 1
    }
  ],
  "location": "AutomationRegDemoSteps.is_displayed(String)"
});
formatter.result({
  "duration": 229333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pay by check",
      "offset": 12
    }
  ],
  "location": "AutomationRegDemoSteps.i_click_on_button_to_make_payment(String)"
});
formatter.result({
  "duration": 1049100074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "confirm my order",
      "offset": 12
    }
  ],
  "location": "AutomationRegDemoSteps.i_click_on_to_complete_the_transaction(String)"
});
formatter.result({
  "duration": 2044575472,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Search result page contains search query",
  "description": "",
  "id": "google-search;search-result-page-contains-search-query",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "i\u0027m on google page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I search for \"Cucumber\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the page title should contain \"cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AutomationRegDemoSteps.i_m_on_google_page()"
});
formatter.result({
  "duration": 3465822578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 14
    }
  ],
  "location": "AutomationRegDemoSteps.i_search_for(String)"
});
formatter.result({
  "duration": 2237424255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber",
      "offset": 31
    }
  ],
  "location": "AutomationRegDemoSteps.the_page_title_should_contain(String)"
});
formatter.result({
  "duration": 613583890,
  "status": "passed"
});
});