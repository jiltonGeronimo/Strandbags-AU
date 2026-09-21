import {test,expect} from '@playwright/test';
import {Cart} from "../pages/Cart";


const testdata = JSON.parse(JSON.stringify(require("../test_data/testdata.json")));

let cart;

test.beforeEach(async ({page}) =>{

    await page.goto(testdata.PDP);
    await page.locator(".product__form button").click();
    await page.locator(".product__color .product-item__siblings li").first().click();
    await page.locator(".product__form button").click();
    await page.waitForLoadState("load");
    await page.locator(".minicart-footer a").nth(1).click();

   

  
})


test('Minicart loads successfully with products',async ({page})=> {
    cart = new Cart(page);

    await cart.cartLoadCorrectly();

    // await page.close();

})

test('Empty cart state ',async ({page})=> {
    cart = new Cart(page);

    await cart.emptycart();

    await page.close();

})

test('Quantity selector behavior',async ({page})=> {
    cart = new Cart(page);

    await cart.quantityBehavior();

    await page.close();

})

test('Remove product',async ({page})=> {
    cart = new Cart(page);

    await cart.removeProduct();

    await page.close();

})

test('Checkout page redirection',async ({page})=> {
    cart = new Cart(page);

    await cart.checkoutRedirect();

    await page.close();

})