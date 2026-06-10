---
description: Search for text and replace it interactively.
tags: ["Docs", "Plugins", "Ready-to-use", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Search and replace

Searches for target text and replaces it with something else.

**Plugin type:** visual, non-system.

**Supported editors:** documents.

<Video src="/assets/images/plugins/webm/search-and-replace" />

## Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_search_replace) and install it following the [desktop](/docs/plugins/development-workflow/installing-and-testing/desktop-editors-installation.md), [on-premises](/docs/plugins/development-workflow/installing-and-testing/docs-on-premises-installation.md), or [cloud](/docs/plugins/development-workflow/installing-and-testing/cloud-saas-installation.md) installation instructions.

## Usage

1. Insert the search text into the document (this text is in the array *arrCodes* in the plugin code).
2. Open the **Plugins** tab and press **Example of search and replace**.
3. Enter the text you want to replace each field with and press the **Ok** button.

## Plugin structure

Repository on GitHub: [example_search_replace](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_search_replace).

1. *config.json*, *index.html*, and *code.js*
2. Icons

## Config

```json
{
  "name": "Example of search and replace",
  "guid": "asc.{5FF5F75F-2977-4B98-8D36-7C406D610B90}",

  "variations": [
    {
      "description": "Example of search and replace",
      "url": "index.html",

      "icons": ["resources/light/icon.png", "resources/light/icon@2x.png"],
      "icons2": [
        {
          "style": "light",
                    
          "100%": {
            "normal": "resources/light/icon.png"
          },
          "125%": {
            "normal": "resources/light/icon@1.25x.png"
          },
          "150%": {
            "normal": "resources/light/icon@1.5x.png"
          },
          "175%": {
            "normal": "resources/light/icon@1.75x.png"
          },
          "200%": {
            "normal": "resources/light/icon@2x.png"
          }
        },
        {
          "style": "dark",
                    
          "100%": {
            "normal": "resources/dark/icon.png"
          },
          "125%": {
            "normal": "resources/dark/icon@1.25x.png"
          },
          "150%": {
            "normal": "resources/dark/icon@1.5x.png"
          },
          "175%": {
            "normal": "resources/dark/icon@1.75x.png"
          },
          "200%": {
            "normal": "resources/dark/icon@2x.png"
          }
        }
      ],
      "isViewer": true,
      "EditorsSupport": ["word"],

      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,

      "initDataType": "none",
      "initData": "",

      "buttons": []
    }
  ]
}
```

## Methods and events

- [button](/docs/plugins/customization/custom-buttons.md)
- [init](/docs/plugins/interacting-with-editors/overview/#how-it-works)
- [onMethodReturn](/docs/plugins/interacting-with-editors/overview/how-to-call-methods.md)
- executeMethod ("[SearchAndReplace](/docs/plugins/interacting-with-editors/document-api/Methods/SearchAndReplace.md)")

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).
