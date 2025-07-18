import { test } from '@playwright/test';
import { LoginPage } from '../web/pages/LoginPage';
import { ProductsPage } from '../web/pages/ ProductsPage';
import { CartPage } from '../web/pages/  CartPage';

test('End-to-End with POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.addItemToCart('add-to-cart-sauce-labs-backpack');
  await productsPage.openCart();

  await cartPage.verifyItemInCart('Sauce Labs Backpack');
  await cartPage.checkoutAndFinish();
  await cartPage.verifyCompletion();
});