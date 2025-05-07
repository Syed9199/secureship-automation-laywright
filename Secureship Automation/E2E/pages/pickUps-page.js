export class Pickups{
    constructor(page) {
        this.page=page
        this.menu = page.locator('.burger-container.v-btn')
        this.pickup=page.locator('.custom-scrollbar > li:nth-child(5)')
        this.schedule=page.locator("(//a[contains(text(), 'Schedule')])[1]")
        this.selectshipment=page.locator('(//div[@class="v-input--selection-controls__ripple"])[4]')
        this.schedulepickupbtn=page.locator('[data-cy="btn-schedule-pickup"]')
        this.nextbtne=page.locator('[data-test="btn-schedule-pickup"]')
        this.confirmnotification= page.getByRole('button', { name: 'Yes, Schedule Pickup' })
        this.complete=page.getByRole('link', { name: 'Done, take me to dashboard' })
        this.switchtonewsite=page.locator('//div[contains(text(), "Get Started!")]')
        this.history=page.locator('(//a[@href="/ship/pickups/history"])[1]')
        this.canclepickup=page.locator('(//button[@data-test="btn-cancel-pickup"])[1]')
        this.confirm=page.locator('[class="btn btn-primary mr-2 v-btn v-btn--has-bg theme--light v-size--default"]')
        }

        async schedulePickup(){
            await this.page.waitForLoadState("domcontentloaded")
            if(await this.switchtonewsite.isVisible())
            {
                await this.switchtonewsite.click();
            }
            await this.menu.click()
            await this.pickup.click()
            await this.schedule.click()
            await this.selectshipment.click()
            await this.schedulepickupbtn.click()
            await this.nextbtne.click()
            await this.confirmnotification.click()
            await this.complete.click()
        }

        async cancelPickup(){
            await this.page.waitForTimeout(1000)
                if(await this.switchtonewsite.isVisible())
            {
                await this.switchtonewsite.click();
            }
            await this.menu.click()
            await this.history.click()
            await this.canclepickup.click()
            await this.confirm.click()
            await this.page.waitForTimeout(2000)
        }

}