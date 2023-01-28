// https://7be90968-f530-408c-b439-ee9c3b928a51.mock.pstmn.io/login
const {By, Key, Builder} = require("selenium-webdriver");
require('selenium-webdriver/chrome');
async function example(){
    console.log("hello from Selenium Web Drive")
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://developers.minfin.com.ua/login/");
    await driver.sleep(1000);
    let title = await driver.getTitle();
    let currentUrl = await driver.getCurrentUrl();
    console.log('have site before login')
    console.log(title);
    console.log(currentUrl);

    const haveLoginLink = await driver.findElement(By.css("a[href='/login/']"));
    if (haveLoginLink)
    {
        haveLoginLink.click();

    }

    // await driver.findElement(By.name("login")).sendKeys("artem.konstantinovich@ukr.net");
    // await driver.findElement(By.name("password")).sendKeys("Tester123_");
    // await driver.findElement(By.css("button[type='submit']")).click();// пример X-Path
    
    // await driver.sleep(7000);
    // title = await driver.getTitle();
    // currentUrl = await driver.getCurrentUrl();
    // if (currentUrl == 'https://developers.minfin.com.ua/')
    // {
    //     console.log("passed")
    // }else{
    //     console.log("failed")
    // }
    console.log('have site after login')
    console.log(title);
    console.log(currentUrl);
    let time = (new Date().getTime()).toString();
    driver.takeScreenshot().then(function (image){
        require('fs').writeFileSync('test_minfin_login_result_'+time.toString()+'.png',image,'base64')
    });
    await driver.quit();

}
example()