const HomePage = require("../pages/HomePage")
const { test, expect } = require('../fixtures/loginFixture')
const userData = require('../data/userData.json')

test('fill user Details flow', async ({ page }, testInfo) => {

    const homepage = new HomePage(page)
    await homepage.fillDetails(userData.UserData);

})