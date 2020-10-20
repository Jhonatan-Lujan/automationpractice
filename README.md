# automationpractice

homeVisual.spec.js (applitools)
smoke.spec.js (automate test case to buy a product)

Some custom commands on the cypress/support/commands.js for the login for example to call cy.Login() instead of place all that logic on the test, this became a custom command.

For the reporter it was implemented mochawesome, on the package.json you can see already some scripts to run all the test and get the reports

And lastly use applitools, it is a good visual AI tool for UI, it saves a lot of time,you will need and API, thus need to create an account:

https://auth.applitools.com/users/register

https://applitools.com/tutorials/cypress.html

After you follow the steps you need to place you API on the file applitools.config.js

apiKey: '',

That's all to have this framework working, don't worry about the mail and pass it is fake so it does matter at all.

npm install
npx eyes-setup

npx cypress open
npm run test
