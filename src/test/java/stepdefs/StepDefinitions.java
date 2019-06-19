package stepdefs;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import io.cucumber.datatable.DataTable;
import org.junit.runner.RunWith;

import java.util.List;

@RunWith(Cucumber.class)
public class StepDefinitions {

    @Given("I am a pre-requisite")
    public void i_am_a_pre_requisite() {
        System.out.println("Pre-requisite booting");
    }

    @When("a scenario starts")
    public void a_scenario_starts() {
        System.out.println("scenario kicked off");
    }

    @Then("execute me first")
    public void execute_me_first() {
        System.out.println("I am executed first");
    }


    @Given("User is on NetBanking landing page")
    public void user_is_on_NetBanking_landing_page() {
        System.out.println("I am in landing page");
    }

    @When("User login to application with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_login_to_application_with_and(String string1, String string2) {
        System.out.println("Logged in using "+string1+" "+string2);
    }

    @Then("Home page is populated")
    public void home_page_is_populated() {
        System.out.println("Home page validated");

    }

    @Then("Cards are displayed \"([^\"]*)\"$")
    public void cards_are_displayed(String value) {
        System.out.println("cards are displayed "+value);

    }

    @When("User signs up with the following values")
    public void user_signs_up_with_the_following_values(DataTable dataTable) {

        List<String> myData = dataTable.asList();

        System.out.println("sign up with " + myData.get(0) + " " +myData.get(1)  + " " +myData.get(2));


    }

    @Then("sign-up is successful")
    public void sign_up_is_successful()  {
        System.out.println("sign up completed");
    }



    @When("User log in to application with {string} and {string}")
    public void user_log_in_to_application(String userName, String pwd) {

        System.out.println("username and password are "+userName+" "+pwd);
    }
}
