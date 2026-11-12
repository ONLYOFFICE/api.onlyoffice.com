---
sidebar_position: 4
hide_table_of_contents: true
description: Change the on-screen watermark from an external UI via the Automation API.
tags: ["Docs", "Integration", "External access", "Automation API"]
---

import { WatermarkExternalToolbar } from '@site/src/components/BrowserWindow';

# Working with watermark

Use the Automation API to change the watermark drawn over the document pages from an external UI — for example, to show the name of the current user or the document status.

:::info
The document opens with a watermark set in the editor config. Your code calls `connector.executeMethod()` to replace it. The editor redraws the pages in real time.
:::

<WatermarkExternalToolbar/>

## How it works

1. The initial watermark is set in the [document.options.watermark_on_draw](/docs/docs-api/usage-api/config/document/document.md#optionswatermark_on_draw) parameter of the editor config. The `%user_name%` placeholder is replaced with the name from `editorConfig.user.name`:

   ``` ts
   const config = {
     document: {
       options: {
         watermark_on_draw: {
           type: "rect",
           width: 160,
           height: 60,
           rotate: -45,
           transparent: 0.3,
           fill: [],
           stroke: [],
           align: 1,
           paragraphs: [{
             align: 2,
             runs: [{
               text: "Confidential: %user_name%",
               fill: [128, 128, 128],
               "font-family": "Arial",
               "font-size": 28,
               bold: true,
             }],
           }],
         },
       },
       // ...
     },
     editorConfig: {
       user: { id: "uid-1", name: "John Smith" },
       // ...
     },
   };
   ```

2. When the user clicks the **Apply** button in the custom interface, the [SetProperties](/docs/plugins/interacting-with-editors/document-api/Methods/SetProperties.md) method is executed with the new [watermark properties](/docs/plugins/interacting-with-editors/document-api/Enumeration/watermark_on_draw.md) in the `watermark_on_draw` parameter. The value is a string with the watermark object in JSON:

   ``` ts
   document.getElementById("applyWatermark").addEventListener("click", () => {
     connector.executeMethod("SetProperties", [{
       watermark_on_draw: JSON.stringify(buildWatermark()),
     }]);
   });
   ```

:::warning
The watermark is drawn by the editor in the browser and does not restrict access to the document. To stop users from getting the document without the watermark, also restrict [download](/docs/docs-api/usage-api/config/document/permissions.md#download), [print](/docs/docs-api/usage-api/config/document/permissions.md#print) and [copy](/docs/docs-api/usage-api/config/document/permissions.md#copy) in the document permissions.
:::

:::note
Please note that the connector is available only for **ONLYOFFICE Docs Developer**.

The connector is a premium feature available at an extra cost. See [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/pricing?from=api) for pricing details, or contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com) to request a quote.
:::
