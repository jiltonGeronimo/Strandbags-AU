import {test,expect} from '@playwright/test';
import {Minicart} from "../pages/Minicart";


const testdata = JSON.parse(JSON.stringify(require("../test_data/testdata.json")));

let minicart;

test.beforeEach(async ({page}) =>{

    await page.goto(testdata.PDP);
    await page.locator(".product__form button").click();
    await page.locator(".product__color .product-item__siblings li").first().click();
    await page.locator(".product__form button").click();

   

  
})


test('Minicart loads successfully with products',async ({page})=> {
    minicart = new Minicart(page);

    await minicart.minicartLoadCorrectly();

    await page.close();

})

test('Minicart empty cart state',async ({page})=> {
    minicart = new Minicart(page);

    await minicart.emptyState();

    await page.close();

})

test('Minicart remove product',async ({page})=> {
    minicart = new Minicart(page);

    await minicart.removeProduct();

    await page.close();

})

test('Minicart quantiy controller',async ({page})=> {
    minicart = new Minicart(page);

    await minicart.quantityController();

    await page.close();

})

test('Minicart Undo Feature',async ({page})=> {
    minicart = new Minicart(page);

    await minicart.Undo();

    await page.close();

})

test('Minicart cart and checkout page redirection',async ({page})=> {
    minicart = new Minicart(page);

    await minicart.cartAndCheckout();

    await page.close();

})