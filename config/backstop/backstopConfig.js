'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');

const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: basicScenario.referenceUrl + '/human-rights/',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  viewports: [
    {
      name: 'tablet_h',
      width: 1024,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Entire document',
      selectors: ['document'],
    },
    {
      ...basic,
      label: 'H1 heading',
      selectors: ['h1'], // only one h1 on the page
    },
    {
      ...basic,
      label: 'H2 heading',
      selectors: ['h2:first-of-type'], // check one h2
    },
    {
      ...basic,
      label: 'Paragraph',
      selectors: ['p:first-of-type'], // check one paragraph
    },
    {
      ...basic,
      label: 'Ordered list',
      selectors: ['ol:first-of-type'], // check one list
    },
    {
      ...basic,
      label: 'Articles 17 to 30 link',
      selectors: ['a:first-of-type'], // check one link
    },
  ],
};

module.exports = config;
