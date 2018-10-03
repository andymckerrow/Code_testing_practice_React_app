import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const puppeteer = require('puppeteer');

it ('allows entry in all 4 fields and submission', () => {

    (async () => {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      
      await page.setViewport({ width: 1401, height: 697 })
      
      await page.goto('http://localhost:3000/?firstName=Andy&lastName=McKerrow&email=amckerrow%40heliotraining.com&phoneNumber=801-363-1352')
      
      await page.waitForSelector('body > #root > form > div > #firstName')
      await page.click('body > #root > form > div > #firstName')
      
      await page.waitForSelector('body > #root > form > div > #lastName')
      await page.click('body > #root > form > div > #lastName')
      
      await page.waitForSelector('body > #root > form > div > #email')
      await page.click('body > #root > form > div > #email')
      
      await page.waitForSelector('body > #root > form > div > #phoneNumber')
      await page.click('body > #root > form > div > #phoneNumber')
      
      await page.waitForSelector('body > #root > form > div > #contact\ button')
      await page.click('body > #root > form > div > #contact\ button')
      
      const navigationPromise = page.waitForNavigation()
      await navigationPromise
      
      await browser.close()
    })()
})