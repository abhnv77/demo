class radioButton{
    constructor(){
        this.radioButtonwidget = $(`//span[text()='Radio Button']`)
    }

    async clickRadioButton(){
        await radioButtonwidget().click()
            
    }

    
}