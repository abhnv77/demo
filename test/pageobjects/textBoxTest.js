class textBoxTest {

    constructor() {
        this.textBox = () => $(`//span[text()="Text Box"]`)
        this.firstName = () => $(`//input[@id="userName"]`)
        this.email = () => $(`//input[@id="userEmail"]`)

    }

    async clickTextBox() {
        await this.textBox().click()
        await $('#userName').waitForDisplayed({ timeout: 4000 })
        await $('#userName').scrollIntoView()
    }
    async addItem() {
        await this.firstName().setValue('Abhinav')
        await this.email().setValue('abhinavSali@gmail.com')
        await $('//textarea[@id="currentAddress"]').setValue('XYZ')
        await $('//textarea[@id="permanentAddress"]').setValue('XYZ')
        await $('//button[@id="submit"]').click()

        const displayedName = await $('//p[@id="name"]').getText();
        const displayedEmail = await $('//p[@id="email"]').getText();
        const displayedCurrentAddress = await $('//p[@id="currentAddress"]').getText();
        const displayedPermanentAddress = await $('//p[@id="permanentAddress"]').getText();

        // console.log(await $('//p[@id="name"]').getText()); just to check
        
        await expect(displayedName).toContain('Abhinav')
        await expect(displayedEmail).toContain('abhinavSali@gmail.com')
        await expect(displayedCurrentAddress).toContain('XYZ')
        await expect(displayedPermanentAddress).toContain('XYZ')
    }
}
export default new textBoxTest()