$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AutomationRegDemo.feature");
formatter.feature({
  "line": 2,
  "name": "Google Search",
  "description": "As a web user\nI want to be able to register\nSo that I can make purchase",
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
  "duration": 3271002666,
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
  "duration": 3877460363,
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
  "duration": 1238724848,
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
  "duration": 185431272,
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
  "duration": 1223517576,
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
  "duration": 1635922424,
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
  "duration": 1342468849,
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
  "duration": 1087650424,
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
  "duration": 66927516,
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
  "duration": 48615273,
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
  "duration": 79824000,
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
  "duration": 69597091,
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
  "duration": 1883736727,
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
  "duration": 796770909,
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
  "duration": 77106909,
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
  "duration": 776382060,
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
  "duration": 62013091,
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
  "duration": 928502303,
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
  "duration": 130909,
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
  "duration": 643013333,
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
  "duration": 1844645334,
  "status": "passed"
});
});