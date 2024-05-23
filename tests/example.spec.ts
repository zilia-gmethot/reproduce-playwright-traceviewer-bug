
import { test } from '../fixtures';
import { expect } from '@playwright/test';

test('has visible header', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page.getByRole('heading', { name: 'Hello World!' })).toBeVisible();
});
