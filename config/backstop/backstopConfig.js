'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');

const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl:
    'https://mate-academy.github.io/layout_solutions/human-rights/',
};

const config = {
  ...backstop,
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
      label: 'entire-document',
      selectors: ['document'],
    },
    {
      ...basic,
      label: 'h1-heading',
      selectors: ['h1'], // only one h1 on the page
    },
    {
      ...basic,
      label: 'h2-heading',
      selectors: ['h2:nth-of-type(100n + 1)'], // check one h2
    },
    {
      ...basic,
      label: 'paragraphs',
      selectors: ['p:nth-of-type(100n + 1)'], // check one paragraph
    },
    {
      ...basic,
      label: 'lists',
      selectors: ['ol:nth-of-type(100n + 1)'], // check one list
    },
    {
      ...basic,
      label: 'link',
      selectors: ['a:nth-of-type(100n + 1)'], // check one link
    },
  ],
};

module.exports = config;
