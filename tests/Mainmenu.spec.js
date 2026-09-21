import {test, expect} from "@playwright/test";
import {mainmenu} from "../pages/mainmenu";

const testdata = JSON.parse(JSON.stringify(require("../test_data/testdata.json")));

let menu;

test.beforeEach( async ({page}) => {

    // In order to access the preview theme must open it twice.
    // for (let i = 0; i < 2; i++) {
  
      await page.goto(testdata.Preview_Theme);
  
    // }
  
  })

  test('Main redirection',async ({page}) =>{

    menu = new mainmenu(page);

    await menu.catlevel1(); 

    await page.close()

  })

  test('Category level - 2 redirection',async ({page}) =>{

    menu = new mainmenu(page);

    await menu.catlevel2();

    await page.close()

  })

  test('Category level - 3 redirection',async ({page})=>{

    menu = new mainmenu(page);

    await menu.catlevel3();

    await page.close()
    

  })

  test('Promotional banner redirection',async ({page})=>{

    menu = new mainmenu(page);

    await menu.promobanner();

    await page.close()

  })

