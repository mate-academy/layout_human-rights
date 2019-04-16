'use strict';

const urls = {
  development: 'http://host.docker.internal:8080',
  travis: 'http://127.0.0.1:8080'
};

// https://github.com/garris/BackstopJS#advanced-scenarios
const basicScenario = {
  label: 'test', // name of the test
  url: urls.development,
  referenceUrl: '',
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
  requireSameDimensions: true
};

const config = {
  id: 'test',
  viewports: [
    {
      name: 'tablet_h',
      width: 1024,
      height: 768
    }
  ],
  scenarios: [
    {
      ...basicScenario,
      label: 'entire-document',
      selectors: ['document']
    },
    {
      ...basicScenario,
      label: 'h1-heading',
      selectors: ['h1']
    },
    {
      ...basicScenario,
      label: 'h2-heading',
      selectors: ['h2']
    },
    {
      ...basicScenario,
      label: 'paragraphs',
      selectors: ['p']
    },
    {
      ...basicScenario,
      label: 'lists',
      selectors: ['ol']
    },
    {
      ...basicScenario,
      label: 'link',
      selectors: ['a']
    }
    // define here scenarios for testing
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report'
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox']
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
  // eslint-disable-next-line max-len
  dockerCommandTemplate: 'docker run --rm -it --network host --mount type=bind,source="{cwd}",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}'
};

module.exports = {
  urls,
  config
};
