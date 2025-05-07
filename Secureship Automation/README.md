# Secureship Automation

This repo contains code for secureship automation using playwright with JavaScript following the Page Object Model
## Prerequisites

- Node.js installed
- VS code or any other Code editor or IDE 

## Getting Started

To initialize this project, follow these steps:

1. Clone the repo using `git clone 'url from github'` command
2. Navigate to the cloned directory using `cd (name of cloned directory)` command
3. Run `npm i` to initiate the playwright
4. If the playwright is missing use the `npm install playwright@latest` command to install it


## Running Tests

Running tests in headless mode  `npx playwright test`

Running tests in headed mode `npx playwright test --headed`

## Testcases Automated 

- Login 
- Address Books 
- Add Package 
- Duplicate Package 
- Create Shipment 
- Duplicate Shipment
- Create return Shipment
- Delete Shipment 
- Get Estimate
- Change Creditcard
- Schedule Pickup 
- Cancel Pickup
- Connect and Remove Carrier Account (UPS)
- Connect BigCommerce Store
- Cutoff Times 
- Import Order from BigCommerce
- Import Order from Shopify
- Remove BigCommerce Store
- Switch to Legacy site
- Logout 
