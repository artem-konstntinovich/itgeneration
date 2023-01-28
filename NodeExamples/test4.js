// https://7be90968-f530-408c-b439-ee9c3b928a51.mock.pstmn.io/login
const {By, Key, Builder} = require("selenium-webdriver");
require('selenium-webdriver/chrome');
async function example(){
    console.log("hello from Selenium Web Drive")
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.browserstack.com/users/sign_in");
    await driver.sleep(5000);
    let title = await driver.getTitle();
    let currentUrl = await driver.getCurrentUrl();
    console.log('have site before login')
    console.log(title);
    console.log(currentUrl);
    
    const haveCookies = diver.findElement(By.id("accept-cookie-notification"));
    if (haveCookies)
    {
        haveCookies.click()
    }

    await driver.findElement(By.id("user_email_login")).sendKeys("artem.konstantinovich@ukr.net");
    await driver.findElement(By.id("user_password")).sendKeys("Password123_");
    await driver.findElement(By.name("commit")).click();
    // changed url on https://automate.browserstack.com/dashboard/v2/getting-started

    await driver.sleep(7000);
    title = await driver.getTitle();
    currentUrl = await driver.getCurrentUrl();
    if (currentUrl == 'https://automate.browserstack.com/dashboard/v2/getting-started')
    {
        console.log("passed")
    }else{
        console.log("failed")
    }
    console.log('have site after login')
    console.log(title);
    console.log(currentUrl);
    let time = (new Date().getTime()).toString();
    driver.takeScreenshot().then(function (image){
        require('fs').writeFileSync('test_browserstack_login_result_'+time.toString()+'.png',image,'base64')
    });
    await driver.quit();

}
example()