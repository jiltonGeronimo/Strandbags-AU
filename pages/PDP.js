const {test,expect} = require('@playwright/test');

const testdata = JSON.parse(JSON.stringify(require("../test_data/testdata.json")));

export class PDP{

   /**
   * @param {import('@playwright/test').Page} page
   */

   constructor(page){

    this.page = page;
    this.vendor = page.locator(".product__vendor");
    this.reviewtop = page.locator (".yotpo-sr-bottom-line-summary");
    this.productName = page.locator(".product__title");
    this.productMainPrice = page.locator(".price-box").first();
    this.productColorTitle = page.locator(".product__color div");
    this.productSiblings = page.locator(".product__color .product-item__siblings li").first();
    this.productSizes = page.locator(".dropdown-sizes");
    this.sizeGuide = page.getByRole("button",{name:"Size guide"});
    this.afterPay = page.locator(".afterpay-paragraph");
    this.addtocart = page.locator(".product__form button");
    this.wishlist = page.locator(".product__form a");
    this.pairItWith = page.locator(".obvSlider").first();
    this.miniCart = page.locator(".minicart");
    this.minicartTitle = page.locator(".minicart-item__title");
    this.wishlistCount = page.locator(".wishlist__count").first();
    this.reviewsection = page.locator(".product__info");
    this.recommended = page.locator("#obv-hb-OPIHM24F");
    this.range = page.locator("#obv-hb-HzJ8Y8Gt");
    this.recently = page.locator("#obv-hb-zLYaFnb6");
    this.footertop = page.locator(".footer__top");




   }

   async PDPLoadCorrectly(){

    await expect(this.vendor).toBeVisible();
    await expect(this.reviewtop).toBeVisible();
    await expect(this.productName).toBeVisible();
    await expect(this.productMainPrice).toBeVisible();
    await expect(this.productColorTitle).toBeVisible();
    await expect(this.productSizes).toBeVisible();
    await expect(this.sizeGuide).toBeVisible();
    await expect(this.afterPay).toBeVisible();
    await expect(this.addtocart).toBeVisible();
    await expect(this.wishlist).toBeVisible();
    await expect(this.pairItWith).toBeVisible();

   }

   async addToCart(){

    let productname = await this.productName.textContent();
    let productnametrim = productname.trim();
    await this.addtocart.click();
    await this.miniCart.waitFor();
    expect(await this.minicartTitle.textContent()).toEqual(productnametrim);

   }

   async addWishlist(){

    // ADD wishlish
    await this.wishlist.click();
    await expect(this.wishlistCount).toBeVisible();
    let removeWishlist = await this.wishlist.textContent();
    let trimremovetest = removeWishlist.trim();
    expect(trimremovetest).toEqual("Remove from Wishlist");

    // Remove wishlish
    await this.wishlist.click();
    await expect(this.wishlistCount).toBeHidden();
    let removeWishlist2 = await this.wishlist.textContent();
    let trimremovetest2 = removeWishlist2.trim();
    expect(trimremovetest2).toEqual("Add To Wishlist");


   }

   async reviewAndObviyo(){

    await this.productSiblings.click();
    await this.page.waitForTimeout(5000);
    await this.footertop.scrollIntoViewIfNeeded();
    await expect(this.recommended).toBeVisible();
    await expect(this.recently).toBeVisible();
    await expect(this.range).toBeVisible();


   }






}