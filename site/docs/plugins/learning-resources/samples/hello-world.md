---
description: "Insert 'Hello world!' text on button click."
tags: ["Docs", "Plugins", "Ready-to-use", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Hello world

Inserts the *Hello world!* phrase when the user presses the button.

**Plugin type:** non-visual, non-system.

**Supported editors:** documents.

<Video src="/assets/images/plugins/webm/hello-world" />

## Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/helloworld) and install it following the [desktop](../../../development-workflow/installing-and-testing/desktop-editors-installation.md), [on-premises](../../../development-workflow/installing-and-testing/docs-on-premises-installation.md), or [cloud](../../../development-workflow/installing-and-testing/cloud-saas-installation.md) installation instructions.

## Usage

1. Find the plugin on the **Plugins** tab.
2. Click the **hello world** button.

## Plugin structure

Repository on GitHub: [helloworld](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/helloworld).

1. *config.json*, *index.html*, and *helloworld.js*
2. Icons
3. *index\_about.html* for the plugin **About** window

## Config

```json
{
  "name": "hello world",
  "guid": "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
  "baseUrl": "",
  "variations": [
    {
      "description": "hello world",
      "url": "index.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "isViewer": false,
      "EditorsSupport": ["word"],

      "isVisual": false,

      "initDataType": "none",
      "initData": "",

      "buttons": []
    },
    {
      "description": "About",
      "url": "index_about.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "isViewer": false,
      "EditorsSupport": ["word"],

      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,

      "initDataType": "none",
      "initData": "",

      "buttons": [
        {
          "text": "Ok",
          "primary": true
        }
      ],

      "size": [392, 147]
    }
  ]
}
```

## Methods and events

- [button](../../../customization/custom-buttons.md)
- [init](../../../interacting-with-editors/overview/#how-it-works)
- [callCommand](../../../interacting-with-editors/overview/how-to-call-commands.md#callcommand)
- [Asc.scope](../../../interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) object
- [info.recalculate](../../../interacting-with-editors/overview/asc-plugin.md#info-object)

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).
