---
description: Copy content between content controls.
tags: ["Docs", "Plugins", "Ready-to-use", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Work with content controls content

Inserts the content of one content control into another.

**Plugin type:** non-visual, non-system.

**Supported editors:** documents.

<Video src="/assets/images/plugins/webm/work-with-content-controls-content" />

## Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_work_with_content_controls_content) and install it following the [desktop](../development-workflow/installing-and-testing/desktop-editors-installation.md), [on-premises](../development-workflow/installing-and-testing/docs-on-premises-installation.md), or [cloud](../development-workflow/installing-and-testing/cloud-saas-installation.md) installation instructions.

## Usage

1. Add two content controls to the document. One of them should have tag 11 and the other - tag 14 (these tags are used in the plugin code as an example but you can change them).
2. Open the **Plugins** tab and press **Example work with content controls content**.
3. The content from the content control with tag 11 will be inserted into the content control with tag 14.

## Plugin structure

Repository on GitHub: [example_work_with_content_controls_content](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_work_with_content_controls_content).

1. *config.json*, *index.html*, and *code.js*
2. Icons

## Config

```json
{
  "name": "Example work with content controls content",
  "guid": "asc.{C9945AC2-8275-4F9B-92E4-CA1104D7305B}",

  "variations": [
    {
      "description": "Example work with content controls content",
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
      "isViewer": false,
      "EditorsSupport": ["word"],

      "isVisual": false,

      "initDataType": "text",
      "initData": "",

      "buttons": [],

      "initOnSelectionChanged": true
    }
  ]
}
```

## Methods and events

- [button](../customization/custom-buttons.md)
- [init](../interacting-with-editors/overview/#how-it-works)
- executeMethod ("[GetAllContentControls](../../office-api/usage-api/document-api/ApiBlockLvlSdt/Methods/GetAllContentControls.md)")
- [executeMethod ("PasteText")](../interacting-with-editors/document-api/Methods/PasteText.md)
- executeMethod ("[SelectContentControl](../interacting-with-editors/document-api/Methods/SelectContentControl.md)")
- [Asc.scope](../interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) object

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).
