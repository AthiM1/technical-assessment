import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async addItemToCart(itemTestId: string) {
    await this.page.click(`[data-test="${itemTestId}"]`);
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}