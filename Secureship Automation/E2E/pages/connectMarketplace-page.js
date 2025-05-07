import testdata from '../../secureship.json'
import {expect} from "@playwright/test";

export class MarketPlaces {
    constructor(page) {
        this.page = page
        this.menu = page.locator('.burger-container.v-btn')
        this.addstore = page.locator('[class="v-select__selections"]')
        this.switchtonewsite=page.locator('//div[contains(text(), "Get Started!")]')
        this.createshipment = page.locator('[href="/ship/shipment/create"]')
        this.clearall=page.locator('[data-cy="clearAllInfo"]')
        this.clearconfirmation=page.locator('[data-cy="confirmationOk"]')
        this.import_btn=page.locator('[data-cy="importOrderButton"]')
        this.selectstore = page.getByText('Select Store',{exact:true})
        this.install = page.getByRole('button',{name:' Install '})
        this.API = page.getByText('API Path ')
        this.Token= page.getByText('accessToken',{exact:true})
        this.ordernumber = page.getByText('Order Number',{exact:true})
        this.length = page.getByLabel('Length')
        this.width = page.getByLabel('Width')
        this.height = page.getByLabel('Height')
        this.importorder=page.getByRole('button',{name: 'Import Order'})
        this.addpack = page.locator('[data-cy="addPackage"]')
        this.alreadyadded = page.locator('(//img[@src="/ship/img/store-bigcommerce.fb9a3f50.svg"])[1]')
        this.deletebtn=page.locator("(//div[contains(text(), ' Big Commerce ')]//following-sibling::div['v-btn__content'])[3]")
        this.ship=page.locator('[class="nav-logo nav__logo"]')
        this.storname = page.getByText('What do you want to name your store?',{exact:true})
        this.bigcommerce=page.getByRole('option',{name:'BigCommerce'})
        this.storeurl=page.getByText('Store URL',{exact: true})
    }

    async connectBigcommerce()
       {
       await this.page.waitForTimeout(1000)
        if(await this.switchtonewsite.isVisible())
           {
               await this.switchtonewsite.click();
           }
        await this.menu.click()
        await this.page.getByText('Connect',{exact: true}).click();
        await this.page.getByRole('link',{name:' Marketplaces '}).click();
        await this.page.waitForTimeout(1000)
        if (await this.alreadyadded.isVisible())
        {
            await this.deletebtn.click()
            await this.page.getByRole('button',{name: 'Delete'}).click();
            await this.page.getByRole('button',{name: 'OK'}).click();
        }
        await this.page.getByText(' Add Store ',{exact: true}).click();
        await this.addstore.click();
        await this.bigcommerce.click();
        await this.storname.fill(testdata.STORE_NAME)
        await this.storeurl.fill(testdata.STORE_URL)
        await this.Token.fill(testdata.ACCESS_TOKEN)
        await this.API.fill(testdata.API_PATH)
        await this.install.click()
        await this.page.waitForTimeout(1000)
        await this.page.getByRole('button',{name:'OK'}).click();
        await this.menu.click()
        await this.ship.click()
       }


    async bigcommerceOrder(){
        await this.createshipment.click()
        await this.clearall.click()
        await this.clearconfirmation.click()
        await this.import_btn.click()
        await this.selectstore.click()
        await this.page.getByText('Big Commerce',{exact: true}).click()
        await this.ordernumber.fill('100')
        await this.importorder.click()
        await this.page.waitForTimeout(2000)
        await this.length.click()
        await this.length.fill(testdata.DIMENSIONS)
        await this.width.fill(testdata.DIMENSIONS)
        await this.height.fill(testdata.DIMENSIONS)
        await this.addpack.click()
        await expect(await this.page.locator('[data-cy="packageSummaryItem"]')).toBeVisible();
    }

    async deleteBigcommerce()
    {
        if (await this.switchtonewsite.isVisible())
            {
            await this.switchtonewsite.click();
            }
        await this.menu.click()
        await this.page.getByText('Connect',{exact:true}).click();
        await this.page.getByRole('link',{name:' Marketplaces '}).click();
        await this.page.waitForTimeout(1000)
        if (await this.alreadyadded.isVisible())
            {
            await this.deletebtn.click()
            await this.page.getByRole('button',{name:'Delete'}).click();
            await this.page.getByRole('button',{name:'OK'}).click();
            }
    }
}

