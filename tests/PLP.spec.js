import {test,expect} from '@playwright/test';
import {PLP} from "../pages/PLP";


const testdata = JSON.parse(JSON.stringify(require("../test_data/testdata.json")));
let plp;

test.beforeEach(async ({page}) =>{

    await page.goto(testdata.PLP);
    await page.locator(".obvDrawer__handleContent").click();
    await page.locator(".obvModal__content").waitFor();
    await page.locator(".obvDrawer__handleContent").click();
    

})


test('PLP loads successfully',async ({page})=> {
    plp = new PLP(page);

    await plp.PLPload();

    await page.close();

})

test('Product cards/grids load successfully',async ({page})=> {

    plp = new PLP(page);

    await plp.productgrid();

    await page.close();


})


test('Category filter pill',async ({page})=> {

    plp = new PLP(page);

    await plp.fillcat();

    await page.close();

})

test('Verify PLP filtering',async ({page})=> {

    plp = new PLP(page);

    await plp.filtering("Backpack", "AYA", "Black");

    await page.close();
})

test('Verify clear filter',async ({page})=> {

    plp = new PLP(page);

    await plp.clearfilter("Backpack", "AYA");

    await page.close();
})

test('Verify invalid filter "not found"',async ({page})=> {

    plp = new PLP(page);

    await plp.invalidFilter("Baby bags", "AYA");

    await page.close();
})



test('Verify PLP sorting',async ({page})=> {

    plp = new PLP(page);

    await plp.sorting();

    await page.close();
    

})

test('Verify load more',async ({page})=> {

    plp = new PLP(page);

    await plp.loadMore();

    await page.close();

})

test('Obviyo product sections',async ({page})=> {

    plp = new PLP(page);

    await plp.obviyoSection();

    // await page.close();

})