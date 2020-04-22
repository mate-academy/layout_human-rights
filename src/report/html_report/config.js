report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document.png",
        "test": "..\\bitmaps_test\\20200422-113117\\Entire_document.png",
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
            "height": -841
          },
          "misMatchPercentage": "4.85",
          "analysisTime": 83
        },
        "diffImage": "..\\bitmaps_test\\20200422-113117\\failed_diff_Entire_document.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\H1_heading.png",
        "test": "..\\bitmaps_test\\20200422-113117\\H1_heading.png",
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
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 667,
            "height": -246
          },
          "misMatchPercentage": "7.49",
          "analysisTime": 60
        },
        "diffImage": "..\\bitmaps_test\\20200422-113117\\failed_diff_H1_heading.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\H2_heading.png",
        "test": "..\\bitmaps_test\\20200422-113117\\H2_heading.png",
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
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 667,
            "height": -249
          },
          "misMatchPercentage": "6.37",
          "analysisTime": 70
        },
        "diffImage": "..\\bitmaps_test\\20200422-113117\\failed_diff_H2_heading.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Paragraph.png",
        "test": "..\\bitmaps_test\\20200422-113117\\Paragraph.png",
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
            "width": -667,
            "height": -4
          },
          "misMatchPercentage": "32.93",
          "analysisTime": 56
        },
        "diffImage": "..\\bitmaps_test\\20200422-113117\\failed_diff_Paragraph.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Ordered_list.png",
        "test": "..\\bitmaps_test\\20200422-113117\\Ordered_list.png",
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
            "width": 667,
            "height": -206
          },
          "misMatchPercentage": "22.36",
          "analysisTime": 69
        },
        "diffImage": "..\\bitmaps_test\\20200422-113117\\failed_diff_Ordered_list.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Articles_17_to_30_link.png",
        "test": "..\\bitmaps_test\\20200422-113117\\Articles_17_to_30_link.png",
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
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -233,
            "height": -249
          },
          "misMatchPercentage": "2.02",
          "analysisTime": 25
        },
        "diffImage": "..\\bitmaps_test\\20200422-113117\\failed_diff_Articles_17_to_30_link.png"
      },
      "status": "fail"
    }
  ]
});