const { test, expect } = require('@playwright/test');

test('login page test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page).toHaveURL(/logged-in-successfully/);

    await expect(page.locator('h1')).toHaveText('Logged In Successfully');
});