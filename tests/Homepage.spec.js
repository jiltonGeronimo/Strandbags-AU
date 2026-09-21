import {test, expect} from '@playwright/test';
import { homepage } from '../pages/homepage';

const testdata = JSON.parse(JSON.stringify(require("../test_data/testdata.json")));

let home;

test.beforeEach( async ({page}) => {

    // In order to access the preview theme must open it twice.
    // for (let i = 0; i < 2; i++) {
  
      await page.goto(testdata.Preview_Theme);
  
    // }
  
  })

test('Page load successfully', async ({page}) =>{
    home = new homepage(page);

    await home.pageloadsuccess();

    await page.close()
    
});

test('Announcement bar redirection', async ({page}) =>{

    home = new homepage(page);

    await home.announcementbar();

    await page.close()

});

test('Logo redirection link', async ({page}) =>{

    home = new homepage(page);

    await home.logoredirection();

    await page.close()
    
});

test('Hero banner renders and link', async ({page}) =>{

    home = new homepage(page);

    await home.herobanner();

    await page.close()
    
});

test('Footer newsletter signup', async ({page}) =>{

    home = new homepage(page);

    await home.footersignup();

    await page.close();
    
});

test('Footer section and links', async ({page}) =>{

    home = new homepage(page);

    await home.footermenus();

    // await page.close();

    
});



