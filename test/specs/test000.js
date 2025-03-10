import landingPage from "../pageobjects/landingPage";
import textBoxTest from "../pageobjects/textBoxTest";
import checkBox from "../pageobjects/checkBox";

describe('Demo QA application', function () {
    it('checking page load', async () => {
        await landingPage.LaunchUrl()
        await browser.waitUntil(async () => await browser.getTitle() === 'DEMOQA', { timeout: 5000 })//wait until used instead of pause
        await expect(browser).toHaveTitle('DEMOQA')
    })
    it('element option is selected', async () => {
        const elementButton = await $(`//h5[text()='Elements']`)
        await elementButton.waitForDisplayed({ timeout: 3000 })

        const isClickable = await elementButton.isClickable()
        await expect(isClickable).toBe(true)
        console.log(isClickable)
        await elementButton.click()

    })
    xit('CLicking textbox option', async () => {
        await textBoxTest.clickTextBox()
    })
    xit('Add personal Details', async () => {
        await textBoxTest.addItem()
    })
    xit('click the textbox widget', async () => {
        await checkBox.clickCheckbox()
    })
    xit('click on home toggle button', async () => {
        await checkBox.toggleHome()
    })
    xit('select document checkbox', async () => {
        await checkBox.clickDocument()
    })
    xit('clicking the radiobutton option', async () => {
        const radioButtonWidget = await $('//h5[text()="Radio Button"]')
        await radioButtonWidget.waitForDisplayed({ timeout: 4000 })
        radioButtonWidget.click()
    })
    xit('click and verify web Table is clickable & add data', async () => {
        const webtableButton = $('//span[text()="Web Tables"]')
        await webtableButton.waitForDisplayed({ timeout: 4000 })

        const isClickable = await webtableButton.isClickable()
        await expect(isClickable).toBe(true)

        await webtableButton.click()


        const addButton = $('//button[@id="addNewRecordButton"]')
        await addButton.scrollIntoView({ block: 'center' })
        await addButton.waitForDisplayed({ timeout: 3000 })
        await addButton.click()

        const firstName = await $('//input[@placeholder="First Name"]')
        // await firstName.waitForDisplayed({timeout:3000})
        //using wait until to stay in the page rather than pause

        await browser.waitUntil(async () => await firstName.isDisplayed(),
            {
                timeout: 3000,
                timeoutMsg: "first name field not found"
            }
        )
        //add items
        await firstName.setValue('Abhinav')
        await $(`//input[@id="lastName"]`).setValue('Sali')
        await $('//input[@id="userEmail"]').setValue('abe@mail.com')
        await $('//input[@id="salary"]').setValue('5000')
        await $('//input[@id="age"]').setValue('25')
        await $('//input[@id="department"]').setValue('QA')
        await $(`//div[@class="text-right col-md-2 col-sm-12"]/button[@id="submit"]`).click()
        await $(`//div[text()="First Name"]`).click()
    })
    it('')
})