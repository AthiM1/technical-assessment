import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyItemInCart(itemName: string) {
    const item = this.page.locator('.inventory_item_name');
    await expect(item).toHaveText(itemName);
  }

  async checkoutAndFinish() {
    await this.page.click('[data-test="checkout"]');
    await this.page.fill('[data-test="firstName"]', 'John');
    await this.page.fill('[data-test="lastName"]', 'Doe');
    await this.page.fill('[data-test="postalCode"]', '12345');
    await this.page.click('[data-test="continue"]');
    await this.page.click('[data-test="finish"]');
  }

  async verifyCompletion() {
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
  }
}