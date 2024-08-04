import { test as base} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AddToCartPage } from '../pages/addToCart';


type myFixtures = {
    loginPage: LoginPage
    addToCartPage: AddToCartPage
}

export const test = base.extend<myFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    addToCartPage: async ({page}, use) => {
        await use(new AddToCartPage(page));
    }
})



export { expect }  from '@playwright/test';