package cucumberoptions;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",
        glue = "stepdefs",tags = "@Regression,@Smoke",strict=true,monochrome = true,
        plugin={"pretty","html:target/cucumber","json:target/cucumber.json","junit:target/cukes.xml"}
)


public class TestRunner {



}
