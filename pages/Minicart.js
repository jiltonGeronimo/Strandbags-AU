import {test,expect} from '@playwright/test';



export class Minicart{


   /**
   * @param {import('@playwright/test').Page} page
   */

   constructor(page){

    this.page = page;
    this.header = page.locator(".minicart-header__title");
    this.continueShopping = page.locator(".minicart-header__button");
    this.shippingBar = page.locator(".free-shipping-calculator");
    this.productCard = page.locator(".minicart-item").first();
    this.productVendor = page.locator(".minicart-item__vendor").first();
    this.productTitle = page.locator(".minicart-item__title").first();
    this.productPrice = page.locator(".minicart-item__price").first();
    this.productColor = page.locator(".minicart-item__options").first();
    this.wishlist = page.locator(".minicart-item__action").first();
    this.removeIcon = page.locator(".minicart-item__action--remove").first();


    this.quantityPlus = page.locator(".minicart-item").first().locator(".minicart-item__quantity a").last();
    this.quantityMinus = page.locator(".minicart-item__quantity a").first();
    this.subTotal = page.locator(".minicart-footer__value");
    this.afterplay = page.locator(".minicart__afterpay-option img");
    this.checkout = page.locator(".minicart-footer a").first();
    this.cartPage = page.locator(".minicart-footer a").nth(1);
    this.youMayAlsoLike = page.locator("#obv-hb-vVminV0J");

    this.emptymessage = page.locator(".minicart-body__empty");
    this.removeItemTitle = page.locator(".removed-item__name");
    this.quantityNumber = page.locator(".field--quantity input").first();
    this.productCardCount = page.locator(".minicart-item");
    this.undo = page.locator(".d-inline-block").last();
    this.bagicon = page.getByTitle("My Bag");
    this.expressCheckout = page.locator("#express-checkout-heading");

    
    



   }

   async minicartLoadCorrectly(){
    await expect(this.header).toBeVisible();
    await expect(this.continueShopping).toBeVisible();
    await expect(this.shippingBar).toBeVisible();
    await expect(this.productCard).toBeVisible();
    await expect(this.productVendor).toBeVisible();
    await expect(this.productTitle).toBeVisible();
    await expect(this.productPrice).toBeVisible();
    await expect(this.productColor).toBeVisible();
    await expect(this.wishlist).toBeVisible();
    await expect(this.removeIcon).toBeVisible();
    await expect(this.quantityPlus).toBeVisible();
    await expect(this.quantityMinus).toBeVisible();
    await expect(this.subTotal).toBeVisible();
    await expect(this.afterplay).toBeVisible();
    await expect(this.checkout).toBeVisible();
    await expect(this.cartPage).toBeVisible();
    await expect(this.youMayAlsoLike).toBeVisible();
   
   }

   async emptyState(){

    let trimsubtotal = "";

    await this.removeIcon.click();
    await this.page.waitForTimeout(2000);
    await this.removeIcon.click();
    expect (await this.emptymessage.textContent()).toEqual("Your bag is empty.");
    trimsubtotal = await this.subTotal.textContent();
    expect (trimsubtotal.trim()).toEqual("$0.00");


   }

   async removeProduct(){

    let productname  = "";
    
    await this.header.waitFor()
    productname = await this.productTitle.textContent();
    await this.removeIcon.click();
    expect (await this.removeItemTitle.textContent()).toEqual(productname)

   }

   async quantityController(){

    let subtotalbefore = "";
    let subtotalafter = "";
    let finalsubbefore = "";
    let finalsubafter = "";

    await this.page.waitForTimeout(3000);
    subtotalbefore = await this.subTotal.textContent();
    await this.quantityPlus.click();
    await this.page.waitForTimeout(3000);
    subtotalafter = await this.subTotal.textContent();

    finalsubbefore = parseFloat(subtotalbefore.replace("$", "").trim());
    finalsubafter = parseFloat(subtotalafter.replace("$", "").trim());

    await expect(finalsubafter).toBeGreaterThan(finalsubbefore);


   }

   async Undo(){

    let productCardCount = "";
    
    await this.header.waitFor()
    await this.removeIcon.click();
    await this.page.waitForTimeout(3000);
    await this.undo.click();
    await this.page.waitForTimeout(3000);

    productCardCount = await this.productCardCount.count();

    await expect (productCardCount).toEqual("2");

   }

   async cartAndCheckout(){

    await this.cartPage.click();
    await this.bagicon.click();
    await this.checkout.click();
    expect (await this.expressCheckout).toBeVisible();

   }

}