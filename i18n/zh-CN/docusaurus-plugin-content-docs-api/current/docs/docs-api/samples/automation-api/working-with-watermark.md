---
sidebar_position: 4
hide_table_of_contents: true
---

import { WatermarkExternalToolbar } from '@site/src/components/BrowserWindow';

# 处理水印

使用自动化 API 从外部 UI 更改绘制在文档页面上的水印，例如显示当前用户的名称或文档状态。

:::info
文档打开时带有在编辑器配置中设置的水印。您的代码调用 `connector.executeMethod()` 来替换它。编辑器会实时重绘页面。
:::

<WatermarkExternalToolbar/>

## 它是如何运作的

1. 初始水印在编辑器配置的 [document.options.watermark_on_draw](/docs/docs-api/usage-api/config/document/document.md#optionswatermark_on_draw) 参数中设置。`%user_name%` 占位符会被替换为 `editorConfig.user.name` 中的名称：

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

2. 当用户单击自定义界面中的 **Apply** 按钮或在文本框中按 Enter 键时，将执行 [SetProperties](/docs/plugins/interacting-with-editors/document-api/Methods/SetProperties.md) 方法，并在 `watermark_on_draw` 参数中传入新的[水印属性](/docs/plugins/interacting-with-editors/document-api/Enumeration/watermark_on_draw.md)。该值为包含水印对象 JSON 的字符串：

   ``` ts
   document.getElementById("applyWatermark").addEventListener("click", () => {
     connector.executeMethod("SetProperties", [{
       watermark_on_draw: JSON.stringify(buildWatermark()),
     }]);
   });
   ```

:::warning
水印由浏览器中的编辑器绘制，不会限制对文档的访问。为防止用户获取不带水印的文档，还应在文档权限中限制[下载](/docs/docs-api/usage-api/config/document/permissions.md#download)、[打印](/docs/docs-api/usage-api/config/document/permissions.md#print)和[复制](/docs/docs-api/usage-api/config/document/permissions.md#copy)。
:::

:::note
请注意，该连接器仅适用于 **ONLYOFFICE 文档开发者版本**。

该连接器是一项需额外付费的高级功能。请参阅 [ONLYOFFICE 文档开发者版](https://www.onlyoffice.com/zh/pricing?from=api)了解价格详情，或联系我们的销售团队 [sales@onlyoffice.com](mailto:sales@onlyoffice.com) 获取报价。
:::
