report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document.png",
        "test": "..\\bitmaps_test\\20200224-223750\\Entire_document.png",
        "selector": "document",
        "fileName": "Entire_document.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -271
          },
          "misMatchPercentage": "14.99",
          "analysisTime": 284
        },
        "diffImage": "..\\bitmaps_test\\20200224-223750\\failed_diff_Entire_document.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\H1_heading.png",
        "test": "..\\bitmaps_test\\20200224-223750\\H1_heading.png",
        "selector": "h1",
        "fileName": "H1_heading.png",
        "label": "H1 heading",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\H2_heading.png",
        "test": "..\\bitmaps_test\\20200224-223750\\H2_heading.png",
        "selector": "h2:first-of-type",
        "fileName": "H2_heading.png",
        "label": "H2 heading",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Paragraph.png",
        "test": "..\\bitmaps_test\\20200224-223750\\Paragraph.png",
        "selector": "p:first-of-type",
        "fileName": "Paragraph.png",
        "label": "Paragraph",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -72
          },
          "misMatchPercentage": "14.80",
          "analysisTime": 111
        },
        "diffImage": "..\\bitmaps_test\\20200224-223750\\failed_diff_Paragraph.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Ordered_list.png",
        "test": "..\\bitmaps_test\\20200224-223750\\Ordered_list.png",
        "selector": "ol:first-of-type",
        "fileName": "Ordered_list.png",
        "label": "Ordered list",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -30
          },
          "misMatchPercentage": "23.60",
          "analysisTime": 80
        },
        "diffImage": "..\\bitmaps_test\\20200224-223750\\failed_diff_Ordered_list.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Articles_17_to_30_link.png",
        "test": "..\\bitmaps_test\\20200224-223750\\Articles_17_to_30_link.png",
        "selector": "a:first-of-type",
        "fileName": "Articles_17_to_30_link.png",
        "label": "Articles 17 to 30 link",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ]
});