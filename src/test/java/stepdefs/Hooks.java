package stepdefs;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

    @Before("@Smoke")
    public void beforeValidation(){

        System.out.println("Smoke tagged - Before");

    }

    @After("@Smoke")
    public void afterValidation(){

        System.out.println("Smoke tagged - After");

    }

    @Before("@Regression")
    public void beforeSanityValidation(){

        System.out.println("Reg tagged - Before");

    }

    @After("@Regression")
    public void afterSanityValidation(){

        System.out.println("Reg tagged - After");

    }



}



