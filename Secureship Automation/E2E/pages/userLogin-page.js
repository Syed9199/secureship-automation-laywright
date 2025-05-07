import testdata from '../../secureship.json'
require('dotenv').config()

export class Login{
    constructor(page)
    {
        this.page = page
        this.loginbutton=page.locator('(//a[@href="/sign-in"])[1]')
        this.email_field = page.locator('#email')
        this.password_field = page.locator('//input[@name="password"]')
        this.login_btn = page.getByRole('button',{name:'Login'})
        this.userprofile=page.locator('button.user-profile')
        this.signout=page.getByRole('link', { name: 'Logout' })
    }
    async login(){
        await this.page.goto(testdata.URL)
        await this.loginbutton.click()
        await this.email_field.fill(process.env.EMAIL)
        await this.password_field.fill(process.env.PASSWORD)
        await this.login_btn.click()
    }
    async logout(){
        await this.page.waitForTimeout(1000)
        await this.userprofile.click();
        await this.signout.click();
        await this.page.waitForTimeout(2000)
    }
}