$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Application Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Home page second login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_NetBanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login to application with \"siva\" and \"andhaadhi\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_login_to_application_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.cards_are_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User sign-up",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_NetBanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User signs up with the following values",
  "rows": [
    {
      "cells": [
        "ganesh1",
        "07777777771",
        "ub67rb1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_signs_up_with_the_following_values(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign-up is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.sign_up_is_successful()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "User log in to application with \"\u003cusername\u003e\" and \"\u003cpwd\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "name": "Cards are displayed \"false\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "pwd"
      ]
    },
    {
      "cells": [
        "ganeshOne",
        "07777777771"
      ]
    },
    {
      "cells": [
        "ganeshTwo",
        "07777777772"
      ]
    },
    {
      "cells": [
        "ganeshThree",
        "07777777773"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_NetBanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User log in to application with \"ganeshOne\" and \"07777777771\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_log_in_to_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.cards_are_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_NetBanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User log in to application with \"ganeshTwo\" and \"07777777772\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_log_in_to_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.cards_are_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_NetBanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User log in to application with \"ganeshThree\" and \"07777777773\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_log_in_to_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.cards_are_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});