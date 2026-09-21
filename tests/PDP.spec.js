import {test,expect} from '@playwright/test';
import {PDP} from "../pages/PDP";


const testdata = JSON.parse(JSON.stringify(require("../test_data/testdata.json")));

let pdp;

test.beforeEach(async ({page}) =>{

    await page.goto(testdata.PDP);
  
})


test('PDP loads successfully',async ({page})=> {
    pdp = new PDP(page);

    await pdp.PDPLoadCorrectly();

    await page.close();

})

test('PDP add-to-cart behavior',async ({page})=> {
    pdp = new PDP(page);

    await pdp.addToCart();

    await page.close();

})

test('PDP wishlist behavior',async ({page})=> {
    pdp = new PDP(page);

    await pdp.addWishlist();

    await page.close();

})

test('PDP review section & Obviyo related section',async ({page})=> {
    pdp = new PDP(page);

    await pdp.reviewAndObviyo();

    // await page.close();

})

