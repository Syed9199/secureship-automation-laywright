export class historyPage{

    constructor(page) {
        this.page = page
        this.createshipment = page.locator('[href="/ship/shipment/create"]')
        this.clearall=page.locator('[data-cy="clearAllInfo"]')
        this.clearconfirmation=page.locator('[data-cy="confirmationOk"]')
        this.menu = page.locator('.burger-container.v-btn')
        this.history = page.locator('.custom-scrollbar > li:nth-child(4)')
        this.selectshipment = page.locator('(//div[@class="v-input--selection-controls__ripple"])[6]')
        this.delete = page.getByRole('button', {name: 'Delete'})
        this.options=page.getByRole('button', {name:'More Options'})
        this.confirm = page.locator('[type="submit"]')
        this.switchtonewsite=page.locator('//div[contains(text(), "Get Started!")]')
        this.next=page.locator('//button[@type="submit"]');
    }
       async deleteShipment()
        {
          await this.page.waitForTimeout(1000)
          if(await this.switchtonewsite.isVisible())
             {
              await this.switchtonewsite.click();
             }
          await this.createshipment.click()
          await this.clearall.click()
          await this.clearconfirmation.click()
          await this.menu.click()
          await this.history.click()
          await this.selectshipment.click()
          await this.delete.click()
          await this.confirm.click()
          await this.page.waitForTimeout(1000)
          await this.selectshipment.click()
        }

      async duplicateShipment()
       {
          await this.page.waitForTimeout(1000)
          if(await this.switchtonewsite.isVisible())
              {
              await this.switchtonewsite.click();
              }
          await this.createshipment.click()
          await this.clearall.click()
          await this.clearconfirmation.click()
          await this.menu.click()
          await this.history.click()
          await this.selectshipment.click()
          await this.options.click()
          await this.page.getByText('Duplicate').click();
          await this.next.click();
      }

      async returnShipment()
       {
           await this.page.waitForTimeout(1100)
           if(await this.switchtonewsite.isVisible())
           {
             await this.switchtonewsite.click();
           }
           await this.createshipment.click()
           await this.clearall.click()
           await this.clearconfirmation.click()
           await this.menu.click()
           await this.history.click()
           await this.selectshipment.click()
           await this.options.click()
           await this.page.getByText(' Create Return Shipment ').click();
           await this.page.waitForTimeout(1000)
           await this.next.click();


       }
}