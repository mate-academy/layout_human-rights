'use strict';
// https://github.com/garris/BackstopJS#advanced-scenarios
const basicScenario = {
  label: 'test', // name of the test
  url: 'http://localhost:8080/index.html',
  referenceUrl: 'https://mate-academy.github.io/layout_solutions/human-rights/',
  readyEvent: '',
  readySelector: '',
  delay: 1000,
  hideSelectors: ['[data-qa-hidden]'],
  removeSelectors: ['[data-qa-remove]'],
  hoverSelector: '',
  clickSelector: '',
  postInteractionWait: 0,
  selectors: '',
  selectorExpansion: true,
  expect: 0,
  misMatchThreshold: 1, // 1% of 100%
  requireSameDimensions: true,
};

module.exports = {
  id: 'test',
  viewports: [
    {
      name: 'tablet_h',
      width: 1024,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basicScenario,
      label: 'entire-document',
      selectors: ['document'],
    },
    {
      ...basicScenario,
      label: 'h1-heading',
      selectors: ['h1'], // only one h1 on the page
    },
    {
      ...basicScenario,
      label: 'h2-heading',
      selectors: ['h2:nth-of-type(100n + 1)'], // check one h2
    },
    {
      ...basicScenario,
      label: 'paragraphs',
      selectors: ['p:nth-of-type(100n + 1)'], // check one paragraph
    },
    {
      ...basicScenario,
      label: 'lists',
      selectors: ['ol:nth-of-type(100n + 1)'], // check one list
    },
    {
      ...basicScenario,
      label: 'link',
      selectors: ['a:nth-of-type(100n + 1)'], // check one link
    },
    // define here scenarios for testing
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
