class checkBox{

    constructor(){
        this.checkBoxwidget = () =>  $(`//span[text()="Check Box"]`)
        this.homeToggle = () => $(`//button[@title="Toggle"]`)
        this.documentCheck = ()=> $(`(//span[@class="rct-checkbox"])[3]`)

    }
    async clickCheckbox(){
        await this.checkBoxwidget().click()
        await this.homeToggle().waitForDisplayed({timeout:2000})
        await this.homeToggle().scrollIntoView()
    }
    async toggleHome(){
        await this.homeToggle().scrollIntoView({block:'center'})
        await this.homeToggle().click()
        await this.documentCheck().waitForDisplayed({timeout:2000})
    }
    async clickDocument(){
        await this.documentCheck().scrollIntoView({block:'center'})
        await this.documentCheck().click()
        await $('//span[text()="documents"]').waitForDisplayed({timeout:3000})
    }

}
export default new checkBox()