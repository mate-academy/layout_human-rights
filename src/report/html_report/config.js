report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document.png",
        "test": "../bitmaps_test/20191015-185504/Entire_document.png",
        "selector": "document",
        "fileName": "Entire_document.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "engineErrorMsg": "net::ERR_CONNECTION_REFUSED at http://localhost:8080/index.html",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -792,
            "height": -1429
          },
          "misMatchPercentage": "2.53",
          "analysisTime": 293
        },
        "diffImage": "../bitmaps_test/20191015-185504/failed_diff_Entire_document.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/H1_heading.png",
        "test": "../bitmaps_test/20191015-185504/H1_heading.png",
        "selector": "h1",
        "fileName": "H1_heading.png",
        "label": "H1 heading",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "engineErrorMsg": "net::ERR_CONNECTION_REFUSED at http://localhost:8080/index.html",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 776,
            "height": -160
          },
          "misMatchPercentage": "11.07",
          "analysisTime": 219
        },
        "diffImage": "../bitmaps_test/20191015-185504/failed_diff_H1_heading.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/H2_heading.png",
        "test": "../bitmaps_test/20191015-185504/H2_heading.png",
        "selector": "h2:first-of-type",
        "fileName": "H2_heading.png",
        "label": "H2 heading",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "engineErrorMsg": "net::ERR_CONNECTION_REFUSED at http://localhost:8080/index.html",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 776,
            "height": -163
          },
          "misMatchPercentage": "9.41",
          "analysisTime": 312
        },
        "diffImage": "../bitmaps_test/20191015-185504/failed_diff_H2_heading.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Paragraph.png",
        "test": "../bitmaps_test/20191015-185504/Paragraph.png",
        "selector": "p:first-of-type",
        "fileName": "Paragraph.png",
        "label": "Paragraph",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "engineErrorMsg": "net::ERR_CONNECTION_REFUSED at http://localhost:8080/index.html",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -776,
            "height": -90
          },
          "misMatchPercentage": "15.29",
          "analysisTime": 195
        },
        "diffImage": "../bitmaps_test/20191015-185504/failed_diff_Paragraph.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Ordered_list.png",
        "test": "../bitmaps_test/20191015-185504/Ordered_list.png",
        "selector": "ol:first-of-type",
        "fileName": "Ordered_list.png",
        "label": "Ordered list",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "engineErrorMsg": "net::ERR_CONNECTION_REFUSED at http://localhost:8080/index.html",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -776,
            "height": 120
          },
          "misMatchPercentage": "22.93",
          "analysisTime": 359
        },
        "diffImage": "../bitmaps_test/20191015-185504/failed_diff_Ordered_list.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Articles_17_to_30_link.png",
        "test": "../bitmaps_test/20191015-185504/Articles_17_to_30_link.png",
        "selector": "a:first-of-type",
        "fileName": "Articles_17_to_30_link.png",
        "label": "Articles 17 to 30 link",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "engineErrorMsg": "net::ERR_CONNECTION_REFUSED at http://localhost:8080/index.html",
        "error": "Test file not found /home/aleksey/projects/layout_human-rights/backstop_data/bitmaps_test/20191015-185504/Articles_17_to_30_link.png"
      },
      "status": "fail"
    }
  ]
});