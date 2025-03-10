import landingPage from "../pageobjects/landingPage.js";

    describe('Testing Landing Page',  ()=> {
        it('Should open the landing page, verify the title, and check elements', async () => {
            // Open the demo site and maximize the browser window
            await browser.url("https://demoqa.com/");
            await browser.maximizeWindow();

            // Verify the page title is correct
            expect(await browser.getTitle()).toBe("DEMOQA");
    
            // Wait until the banner image is displayed and clickable
            await browser.waitUntil(
                async () => (await landingPage.$bannerImage()).isDisplayed() && (await landingPage.$bannerImage()).isClickable(), 
                {
                    timeout: 5000, 
                    timeoutMsg: "Banner image was not displayed or clickable in time"
                }
            );
    
            // Get all buttons on the page
            let buttons = await landingPage.getButtons();
            
            // Loop through each button and verify it is displayed and clickable
            for (let button of buttons) {
                await browser.waitUntil(
                    async () => await button.isDisplayed() && await button.isClickable(), 
                    {
                        timeout: 5000, 
                        timeoutMsg: "A button was not displayed or clickable in time"
                    }
                );
                
                // Verify banner image is displayed and clickable
                expect(await (await landingPage.$bannerImage()).isDisplayed()).toBe(true, "Banner image is not displayed");
                expect(await (await landingPage.$bannerImage()).isClickable()).toBe(true, "Banner image is not clickable");
            }
        });
    })
    