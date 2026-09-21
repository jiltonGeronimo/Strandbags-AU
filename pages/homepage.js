
const {expect} = require('@playwright/test');

const testdata = JSON.parse(JSON.stringify(require("../test_data/testdata.json")));

export class homepage{

   /**
   * @param {import('@playwright/test').Page} page
   */

constructor(page){
    
    this.page = page;
    this.logo = page.locator('.logo-image');
    this.searchicon = page.locator('.search-icon').last();
    this.account = page.locator('.main-menu__item',{hasText: "Account"});
    this.carticon = page.locator('.cart-icon');
    this.menus = page.locator('.shop-menu .main-menu__item').first();
    this.announcement = page.locator('.announcement-bar__top');
    this.heroslider = page.locator('.container--screen .keen-slider__slide').first();
    this.herosliderbutton = page.locator('.button',{hasText:"SHOP ALL"});
    this.footersign = page.locator('.footer__button'); 
    this.footermenu = page.getByRole('menuitem',{name:"Contact Us"});
    this.contactustitle = page.locator('h1');

    
}


async pageloadsuccess(){

   await expect(this.logo).toBeVisible();
   await expect(this.searchicon).toBeVisible();
   await expect(this.account).toBeVisible();
   await expect(this.carticon).toBeVisible();
   await expect(this.menus).toBeVisible();

}

async announcementbar(){

    await this.announcement.click();
    await this.page.waitForLoadState('load');
    await expect(this.page.url()).toEqual(testdata.Announcement);


}

async logoredirection(){

    await this.announcement.click();
    await this.page.waitForLoadState('load');
    await expect(this.page.url()).toEqual(testdata.Announcement);
    await this.logo.click();


}

async herobanner(){

    await expect(this.heroslider).toBeVisible();
    await this.herosliderbutton.click();


}

async footersignup(){

    await expect(this.footersign).toBeVisible();
    await this.footersign.click();
    await expect(this.page.url()).toEqual("https://www.strandbags.com.au/account/register");
    
}

async footermenus(){

    await this.footermenu.click();
    await expect (this.contactustitle).toHaveText("Contact Us");

} 

}