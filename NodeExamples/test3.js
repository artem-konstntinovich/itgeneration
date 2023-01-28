// https://7be90968-f530-408c-b439-ee9c3b928a51.mock.pstmn.io/login
const {By, Key, Builder} = require("selenium-webdriver");
require('selenium-webdriver/chrome');
async function example(){
    console.log("hello from Selenium Web Drive")
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://7be90968-f530-408c-b439-ee9c3b928a51.mock.pstmn.io/login")
    await driver.findElement(By.id("idName")).sendKeys("Tester");
    await driver.findElement(By.id("btnClick")).click();
    const inputValue = await driver.findElement(By.id("idHelloResult")).getAttribute("value");
    console.log('input value is ', inputValue);
    if (inputValue == 'Hello, Tester')
    {
       console.log("passed")
    }else{
        console.log("faild")
    }
    await driver.sleep(5000);
    let time = (new Date().getTime()).toString();
    driver.takeScreenshot().then(function (image){
        require('fs').writeFileSync('test_htmlmock_result_'+time.toString()+'.png',image,'base64')
    });
    await driver.quit();

}
example()