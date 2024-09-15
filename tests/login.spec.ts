import { test, expect } from '@playwright/test';

test('go to', async ({ page }) => {
  await page.goto('https://app.dev.myhomeiq.report/sign-in');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("myHomeIQ Admin");

  await expect(page.getByText(' Unlock myhomeIQ')).toBeVisible();

  const emailInput = page.getByRole('textbox', {name: 'email'})

  await emailInput.fill('kovalchukruslanlink@gmail.com')

  const passwordInput = page.locator('input').nth(1)
  await passwordInput.fill('')
  
  const signInButton = page.getByRole('button', {name: 'Sign in'})

  await signInButton.click()

});




