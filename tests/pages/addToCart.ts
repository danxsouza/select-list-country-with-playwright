import {expect, type Page, type Locator} from '@playwright/test';


export class AddToCartPage {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly cartButtonItens: Locator;
    readonly cartButton: Locator;
    readonly listOfProducts: Locator;
    readonly checkoutButton: Locator;
    readonly selectCountry: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator('.card-body');
        this.cartButtonItens = page.locator('.card-body b');
        this.cartButton = page.locator('[routerlink*="cart"]');
        this.listOfProducts = page.locator('div li');
        this.checkoutButton = page.locator('text=Checkout');
        this.selectCountry = page.locator('[placeholder="Select Country"]');
    }

    async addToCart() {
        const productName = 'ZARA COAT 3';
        const titles = await this.cartButtonItens.allTextContents();
        console.log(titles);
        const count: any = await this.addToCartButton.count();
        for (let i = 0; i < count; i++) {
            if (await this.addToCartButton.nth(i).locator('b').textContent() === productName) {
                await this.addToCartButton.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
        await this.cartButton.click();
        await this.listOfProducts.first().waitFor({state: 'visible'});
        const bool = await this.page.locator('h3:has-text("ZARA COAT 3")').isVisible();
        expect(bool).toBeTruthy();
        await this.checkoutButton.click();

        await this.selectCountry.pressSequentially('Bra');

        const dropdown = this.page.locator('.ta-results');
        await dropdown.waitFor({state: 'visible'});

        const optionsCount = await dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
            const text = await dropdown.locator("button").nth(i).textContent();
            if (text === " Brazil") {
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }
    }
}
