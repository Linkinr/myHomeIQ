import { test as setup } from "../fixtures/browserSetup.fixture";
import { test, expect } from '@playwright/test';

const authFile = ".auth/user.json";

setup('go to', async ({ browserSetup }) => {

    const { page, context } = browserSetup;

    await setup.step("Log in to MyHomeIQ", async () => {
        
        await page.goto("https://app.stage.myhomeiq.report/sign-in");
      
        await expect(page).toHaveTitle("myHomeIQ Admin");
      
        await expect(page.getByText(' Unlock myhomeIQ')).toBeVisible();
      
        const emailInput = page.getByRole('textbox', { name: 'email' })
      
        await emailInput.fill(process.env.ACCOUNT_EMAIL!)
      
        const passwordInput = page.locator('input').nth(1)
        await passwordInput.fill(process.env.ACCOUNT_PASSWORD!)
      
        const signInButton = page.getByRole('button', { name: 'Sign in' })
      
        await signInButton.click()
      
        await expect(page).toHaveURL(/homeowners\/reports/)
        context
    })

    await page.context().storageState({ path: authFile });
})