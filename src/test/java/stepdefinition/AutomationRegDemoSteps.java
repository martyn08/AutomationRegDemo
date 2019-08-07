package stepdefinition;

import com.sun.org.apache.xpath.internal.operations.Plus;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import javax.xml.soap.Detail;
import java.util.List;
import java.util.concurrent.TimeUnit;
import static org.testng.Assert.assertTrue;





public class AutomationRegDemoSteps {
    public static WebDriver driver;

    @Given("^i'm on google page$")
    public void i_m_on_google_page() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\BidemiAkinlade\\IdeaProjects\\AutomationDemoTraining\\drivers\\chromedriver.exe");

        //System.setProperty("webdriver.firefox.marionette", "C:\\Users\\BidemiAkinlade\\IdeaProjects\\GoogleSearch\\drivers\\geckodriver.exe");
        driver = new ChromeDriver();
        // driver.get("https://www.techlistic.com/p/selenium-practice-form.html");
        driver.get("https://www.google.com/");
    }

    @Given("^i navigate to \"([^\"]*)\" to search for online store$")
    public void i_navigate_to_to_search_for_online_store(String arg1) throws Throwable {
        driver.get("http://automationpractice.com/index.php");
    }

    @Given("^i click on \"([^\"]*)\" button to login$")
    public void i_click_on_button_to_login(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#header > div.nav > div > div > nav > div.header_user_info > a")).click();
    }

    @Given("^i enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_enter_valid_and(String arg1, String arg2) throws Throwable {
        driver.findElement(By.cssSelector("#email")).sendKeys("qaautomation05@gmail.com");
        driver.findElement(By.cssSelector("#passwd")).sendKeys("javaauto05A");
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }

    @Given("^i clicked on \"([^\"]*)\" button$")
    public void i_clicked_on_button(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#SubmitLogin")).click();

    }

    @Given("^i click on \"([^\"]*)\" section to view the product$")
    public void i_click_on_section_to_view_the_product(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#block_top_menu > ul > li:nth-child(2)")).click();
    }

    @Given("^i click on \"([^\"]*)\" to select desired dress$")
    public void i_click_on_to_select_desired_dress(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#subcategories > ul > li:nth-child(3) > h5 > a")).click();
    }

    @Given("^i click on \"([^\"]*)\" to select desired shirt$")
    public void i_click_on_to_select_desired_shirt(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.last-line.last-item-of-tablet-line.last-mobile-line > div > div.right-block > h5 > a")).click();
    }

    @Given("^i click on \"([^\"]*)\" to select two dresses$")
    public void i_click_on_to_select_two_dresses(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#quantity_wanted_p > a.btn.btn-default.button-plus.product_quantity_up > span > i")).click();
    }

    @Given("^i click on \"([^\"]*)\" to choose medium dress$")
    public void i_click_on_to_choose_medium_dress(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#group_1 > option:nth-child(2)")).click();
    }


    @Given("^i click on \"([^\"]*)\" to select the colour of dress$")
    public void i_click_on_to_select_the_colour_of_dress(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#color_8")).click();
    }

    @Given("^i click on \"([^\"]*)\" to add the item to basket$")
    public void i_click_on_to_add_the_item_to_basket(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#add_to_cart > button")).click();
    }

    @Given("^i click on \"([^\"]*)\" to exit the basket$")
    public void i_click_on_to_exit_the_basket(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a")).click();
    }

    @Given("^i click on \"([^\"]*)\" to exit summary$")
    public void i_click_on_to_exit_summary(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium")).click();
    }

    @Given("^i type \"([^\"]*)\" in the comment box$")
    public void i_type_in_the_comment_box(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#ordermsg > textarea")).sendKeys("All for you");
    }

    @Given("^i click on \"([^\"]*)\" to exit Address$")
    public void i_click_on_to_exit_Address(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#center_column > form > p > button")).click();
    }

    @Given("^i check the \"([^\"]*)\" to accept condition$")
    public void i_check_the_to_accept_condition(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#cgv")).click();
    }

    @Given("^i click on \"([^\"]*)\" to exit Shipping$")
    public void i_click_on_to_exit_Shipping(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#form > p > button")).click();
    }

    @Given("^\"([^\"]*)\" is displayed$")
    public void is_displayed(String arg1) throws Throwable {
        System.out.println(arg1);

    }

    @When("^i click on \"([^\"]*)\" button to make payment$")
    public void i_click_on_button_to_make_payment(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#HOOK_PAYMENT > div:nth-child(2) > div")).click();
    }

    @Then("^i click on \"([^\"]*)\" to complete the transaction$")
    public void i_click_on_to_complete_the_transaction(String arg1) throws Throwable {
        driver.findElement(By.cssSelector("#cart_navigation > button")).click();
        driver.quit();
    }

}
