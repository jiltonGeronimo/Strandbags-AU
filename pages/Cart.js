import {test,expect} from '@playwright/test';



export class Cart{


   /**
   * @param {import('@playwright/test').Page} page
   */

   constructor(page){

    this.page = page;
    this.breadcrumb = page.locator(".breadcrumb");
    this.bagTitle = page.locator(".cart-header");
    this.vendor = page.locator(".cart-item__vendor").last();
    this.productTitle = page.locator(".cart-item__title").last();
    this.productPrice = page.locator(".cart-item__value .price").first();
    this.productQuantityPlus = page.locator(".cart-item__value .field--quantity a").last();
    this.remove = page.locator(".cart-item__action").first();
    this.movetowishlist = page.locator(".cart-item__action").nth(1);
    this.emptymessage = page.locator(".cart-empty p");
    this.minicartCount = page.locator(".minicart__count");

    this.checkoutBTN = page.locator('span:has-text("PROCEED TO CHECKOUT")');
    this.expressCheckout = page.locator("#express-checkout-heading");
  


   }

   async cartLoadCorrectly(){

    await expect (this.breadcrumb).toBeVisible();
    await expect (this.bagTitle).toBeVisible();
    await expect (this.vendor).toBeVisible();
    await expect (this.productTitle).toBeVisible();
    await expect (this.productPrice).toBeVisible();
    await expect (this.productQuantity).toBeVisible();
    await expect (this.remove).toBeVisible();
    await expect (this.movetowishlist).toBeVisible();




   }

   async emptycart(){

    let trimmessage = "";

    await this.remove.click();
    await this.page.waitForTimeout(2000);
    await this.remove.click();

    trimmessage = await this.emptymessage.textContent()
    expect (trimmessage.trim()).toEqual("Your bag is empty.");

   }

   async quantityBehavior(){

    await this.productQuantityPlus.click();
    await this.page.waitForTimeout(4000);

    expect (await this.minicartCount.textContent()).toEqual("3");

   }

   async removeProduct(){

    await this.remove.click();
    await this.page.waitForTimeout(4000);

    expect (await this.minicartCount.textContent()).toEqual("1");
    
   }

   async checkoutRedirect(){
    await this.checkoutBTN.click();
    await expect ( this.expressCheckout).toBeVisible();

   }

}
