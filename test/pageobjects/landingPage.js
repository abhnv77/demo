class landingPage{
    constructor(){
        this.elementWidget = (widgetname)=> $(`//h5[text()='${widgetname}']`)
    }
    async LaunchUrl() {
        await browser.url('https://demoqa.com/');
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle('DEMOQA');
    }
    async clickWidget(widgetname){
        await this.elementWidget(widgetname).click()
    }
}
export default new landingPage()

// class landingPage {
//     constructor() {
//         this.$hometitle = async () => await $(`//img[@src="/images/Toolsqa.jpg"]`);

//         this.$bannerImage = async () => await $(`//img[@class="banner-image"]`);

//         //this.$tabs = async (tabs) => await $(`//h5[text()="${tabs}"]`);

//         //this.$elements = async (elements) => await $(`//span[text()="${elements}"]`);
//     }

//     async getButtons() {
//         return await $$("//h5"); 
//     }
// }