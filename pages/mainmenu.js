import {test,expect} from '@playwright/test';



export class mainmenu{


   /**
   * @param {import('@playwright/test').Page} page
   */

   constructor(page){




    this.page=page;
    this.menus = page.locator('.shop-menu .main-menu__item',{hasText:"Travel"}).nth(1);
    this.cat2 = page.locator('.megamenu__secondary-title',{hasText:"TRAVEL BAGS"}).last();
    this.cat3 = page.locator('.submenu__link-text',{hasText:"Luggage Sets"});
    this.plptitle = page.locator('h1');
    this.bannerpromo = page.locator('.feature-container-block').first();
    


   }

   async catlevel1(){

    await this.menus.click();


   }

   async catlevel2(){

    await this.menus.hover();
    await this.cat2.click();
    await expect(this.plptitle).toHaveText("Travel Bags")


   }

   async catlevel3(){

    await this.menus.hover();
    await this.cat3.click();
    await expect(this.plptitle).toHaveText("Luggage Sets")

   }


   async promobanner(){

    await this.menus.hover();
    await this.bannerpromo.click();
    await expect(this.plptitle).toHaveText("TRAVEL")

   }




}