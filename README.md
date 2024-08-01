# Web Automation

## Installation

`npm install`

## Create ENV Variables

Create a .env file in root folder
HUBSPOT_USERNAME_1=YOUR_USERNAME
HUBSPOT_PASSWORD_1=YOUR_PASSWORD

ORANGEHRM_USERNAME=YOUR_USERNAME
ORANGEHRM_PASSWORD=YOUR_PASSWORD

## Running Tests

`npx playwright test --ui`

### Run a Single Test in Debug Mode

`npx playwright test ./tests/orangehrm.spec.ts --project=chromium --headed --debug`

## Recording Tests

`npx playwright codegen`

