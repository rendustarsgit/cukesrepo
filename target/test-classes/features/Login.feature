Feature: Application Login


  @Sanity
  Scenario: Home page default login
  Given User is on NetBanking landing page
  When User login to application with "gany" and "india"
  Then Home page is populated
  And Cards are displayed "true"

  @Smoke
  Scenario: Home page second login
    Given User is on NetBanking landing page
    When User login to application with "siva" and "andhaadhi"
    Then Home page is populated
    And Cards are displayed "false"

  @Regression
  Scenario: User sign-up
    Given User is on NetBanking landing page
    When User signs up with the following values
    | ganesh1 | 07777777771 | ub67rb1 |
    Then sign-up is successful

  @Regression
  Scenario Outline: User login
    Given User is on NetBanking landing page
    When User log in to application with "<username>" and "<pwd>"
    Then Home page is populated
    And Cards are displayed "false"

    Examples:
      |username  |pwd         |
      |ganeshOne |07777777771 |
      |ganeshTwo |07777777772 |
      |ganeshThree |07777777773 |