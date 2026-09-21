

const {test,expect} = require('@playwright/test');

const testdata = JSON.parse(JSON.stringify(require("../test_data/testdata.json")));

export class PLP{

   /**
   * @param {import('@playwright/test').Page} page
   */

   constructor(page){

    this.page = page
    this.breadcrumbs = page.locator(".breadcrumb");
    this.title = page.locator("h1");
    this.collectionfilter = page.locator(".collection .keen-slider a").first();
    this.collectionfiltername = page.locator(".collection .keen-slider span").first().textContent();
    this.productgrid = page.locator(".collection__product-list");
    this.filter = page.locator("button h2").first();
    this.sort = page.locator("button h2").last();
    this.loadmore = page.locator(".button--primary",{hasText:"LOAD MORE"});
    this.bottomcontent = page.locator(".bottom-content__text");
    this.productimage = page.locator(".product-item__image").first();
    this.addtocart = page.locator(".add-to-cart-form .product-item__action",{hasText:"ADD TO BAG"}).first();
    this.addcompare = page.locator(".add-to-cart-form .product-item__action",{hasText:"COMPARE"}).first();
    this.wishbutton = page.locator(".product-item__wishlist").first();
    this.swatches = page.locator(".product-item__siblings").first();
    this.filterTitle = page.locator(".filter-section__title");
    this.filterActiveType = page.locator(".collapsible__content span", {hasText:"Backpack"});
    this.filterActiveBrand = page.locator(".collapsible__content span", {hasText:"AYA"});
    this.filterActiveColor = page.locator(".collapsible__content span", {hasText:"Black"});
    this.getFilterButton = page.getByRole('button', { name: 'Apply Filter' });
    this.filterWrapper = page.locator(".active-filter-wrapper div");
    this.clearfilterBtn = page.getByRole("button",{name: "Clear All"}).first();
    this.sortPopup = page.locator(".sort.text-right div");
    this.sortValue = page.getByText("Price, low to high").textContent();
    this.getPrice = page.locator(".price-box span").first();
    this.loadMoreBtn = page.getByRole("button", {name:"Load more"});
    this.getViewedText = page.locator(".collection__viewed-amount");
    this.recommendation = page.locator("#collection-obviyo-reserved-space");
    this.recently = page.locator("#obv-hb-zLYaFnb6");
    this.footerTop = page.locator(".footer__top");
    this.filterNoProducts = page.locator(".lead");


   }

   getActiveFilterByText(filter_text) {
      return this.page.locator(".collapsible__content span", { hasText: filter_text });
    }

   async PLPload(){

    await expect(this.breadcrumbs).toBeVisible();
    await expect(this.title).toBeVisible();
    await expect(this.collectionfilter).toBeVisible();
    await expect(this.productgrid).toBeVisible();
    await expect(this.filter).toBeVisible();
    await expect(this.sort).toBeVisible();
    await expect(this.loadmore).toBeVisible();
    await expect(this.bottomcontent).toBeVisible();

   }

   async productgrid(){

    await this.productimage.hover();
    await this.addcompare.click();
    await this.addtocart.click();
    await expect(this.wishbutton).toBeVisible();
    await expect(this.swatches).toBeVisible();

   }

   async fillcat(){

    const name = await this.collectionfiltername;
    await this.collectionfilter.click();
    const text = (await this.title.textContent()).trim();
    expect(text).toEqual(name);
 

   }

   async filtering (backpack, aya, black){

      await this.filter.click();
      await this.filterTitle.nth(0).click();
      await this.getActiveFilterByText(backpack).first().click();

      await this.filterTitle.nth(1).click();
      await this.getActiveFilterByText(aya).first().click();

      await this.filterTitle.nth(2).click();
      await this.getActiveFilterByText(black).first().click();

      await this.getFilterButton.click();

      let selectedFilters = await this.filterWrapper.allTextContents();

      for (let x = 0; x < testdata.Filter.length;  x++){
         let trimLabel = selectedFilters[x].trim(); 
          await expect(trimLabel).toEqual(testdata.Filter[x]);

      }
   
   }

   async invalidFilter (baby, aya){

      let trimtext = "";
      let filtertext = "";

      await this.filter.click();
      await this.filterTitle.nth(0).click();
      await this.getActiveFilterByText(baby).first().click();

      await this.filterTitle.nth(1).click();
      await this.getActiveFilterByText(aya).first().click();

      await this.getFilterButton.click();
      filtertext = await this.filterNoProducts.textContent();
      trimtext = filtertext.trim();
      

      await expect(trimtext).toEqual("Sorry, there are no products in this collection")

   
   }


   async clearfilter(backpack, aya){

      // 1st filter
      await this.filter.click();
      await this.filterTitle.nth(0).click();
      await this.getActiveFilterByText(backpack).first().click();

      await this.getFilterButton.click();
      await this.clearfilterBtn.click();
      await expect(this.filterWrapper.first()).toBeHidden();


      // 2nd filter
      await this.filter.click();
      await this.filterTitle.nth(1).click();
      await this.getActiveFilterByText(aya).first().click();
      await this.filterTitle.nth(2).click();
      await this.getFilterButton.click();
      await this.clearfilterBtn.click();
      await expect(this.filterWrapper).toBeHidden();
   
   }

   async sorting(){

      await this.sort.click();
      await this.sortPopup.nth(2).click();
      expect(await this.sortValue).toEqual("Price, low to high")
      await this.page.waitForTimeout(5000);
      let firstItemPrice = await this.getPrice.textContent();
      let getFinalPrice = firstItemPrice.replace("$", "").trim();
      let finalPrice = parseFloat(getFinalPrice);
      await expect(finalPrice).toBeLessThan(5);
   

   }

   async loadMore(){

      await this.loadMoreBtn.click();
      await this.page.waitForTimeout(5000);
      let viewedmessage = await this.getViewedText.textContent();
      let productCount = viewedmessage.trim().slice(14,16);
      await expect(productCount).toEqual("71")

   }

   async obviyoSection(){
      await this.page.waitForLoadState("load");
      await this.productimage.click();
      await this.page.waitForTimeout(5000);
      await this.page.goBack();
      await this.page.waitForTimeout(5000);
      await this.footerTop.scrollIntoViewIfNeeded();
      await expect(this.recommendation).toBeVisible();
      await expect(this.recently).toBeVisible();

   }

}