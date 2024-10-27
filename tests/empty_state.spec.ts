import { test, expect } from '@playwright/test';

test('go to', async ({ page }) => {

  await page.goto("");

  await expect(page).toHaveURL(/homeowners\/reports/)

  await page.waitForTimeout(1000);

  const logoImg = page.locator('img[alt="logo"]')

  await expect(logoImg).toBeVisible()

  await expect(page.locator('.desktop-nav__menu > li')).toHaveText([' Analytics ', ' Homeowners ', ' Buyers ', ' Intelligence ', ' Training ']);

  const avatarImg = page.locator('div[class="avatar-placeholder-image ng-star-inserted"] > img')
  await expect(avatarImg).toBeVisible()

  const settingsButton = page.locator('div[class="profile-actions__toggle inline-svg"] > svg')
  await expect(settingsButton).toBeVisible()



});






