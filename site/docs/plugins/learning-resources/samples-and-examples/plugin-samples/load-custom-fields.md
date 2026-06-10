---
description: Load custom fields with questions and dropdowns.
tags: ["Docs", "Plugins", "Ready-to-use", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Load custom fields

Loads custom fields from the document.

:::note
The fields should be already added to the document with the [Example add custom fields](./add-custom-fields.md) plugin.
:::

**Plugin type:** visual, non-system.

**Supported editors:** documents.

<Video src="/assets/images/plugins/webm/load-custom-fields" />

## Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_customfields_load) and install it following the [desktop](/docs/plugins/development-workflow/installing-and-testing/desktop-editors-installation.md), [on-premises](/docs/plugins/development-workflow/installing-and-testing/docs-on-premises-installation.md), or [cloud](/docs/plugins/development-workflow/installing-and-testing/cloud-saas-installation.md) installation instructions.

## Usage

1. Open the **Plugins** tab and press **Example load custom fields**.
2. To answer a **simple question**, type your answer in the **type here...** field.
3. To answer a **question with drop down variants**, select one option.
4. Press the **Next** button to go to the next question or the **Back** button to go back to the previous one.
5. When all the questions are answered, the plugin will be automatically closed. Your answers will appear in the document.

## Plugin structure

Repository on GitHub: [example_customfields_load](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_customfields_load).

1. *config.json*, *index.html*, and *code.js*
2. Icons

## Config

```json
{
  "name": "Example loading custom fields",
  "guid": "asc.{E5A81B17-C871-4C4B-A90A-62D3A7EC0751}",

  "variations": [
    {
      "description": "Example loading custom fields",
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
- [onMethodReturn](/docs/plugins/interacting-with-editors/overview/asc-plugin.md#onmethodreturn)
- executeMethod ("[GetAllContentControls](/docs/office-api/usage-api/document-api/ApiDocument/Methods/GetAllContentControls.md)")
- executeMethod ("[InsertAndReplaceContentControls](/docs/plugins/interacting-with-editors/document-api/Methods/InsertAndReplaceContentControls.md)")

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).
