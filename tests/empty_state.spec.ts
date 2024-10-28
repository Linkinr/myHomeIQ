import { test, expect } from '@playwright/test';

test('empty state', async ({ page }) => {

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

  await expect(page.locator('.tab-nav__item > a')).toHaveText(['Reports', 'Refi', 'Activity', 'Leads', 'Banners']);

  const createReportBtn = page.getByRole('button', {name:'Create report'})
  await expect(createReportBtn).toBeVisible()

  const menuBtn = page.locator('.control-btn')
  await expect(menuBtn).toBeVisible()

  const emptyStateText = page.getByRole('heading', {name: 'No results found. Please try a different search query.'})
  await expect(emptyStateText).toBeVisible()

  const searchButton = page.locator('.iq-filters-search >  button')
  await expect(searchButton).toBeVisible()



});






