---
sidebar_position: -6
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# 移动集成

ONLYOFFICE文档可以在原生移动应用程序中运行。方法是在 WebView 组件（Android 上为 [WebView](https://developer.android.com/reference/android/webkit/WebView)，iOS 上为 [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview)）中加载**文档编辑器** — 与桌面浏览器中运行的编辑器相同，只是将 [`type`](../../../usage-api/config/config.md#type) 参数设置为 `"mobile"`，以便界面针对触摸屏进行优化：

``` ts
const config = {
  type: "mobile",
  // ...编辑器配置的其余部分
};
```

用户可以直接在设备上查看和编辑文本文档、电子表格、演示文稿和 PDF。集成架构与[工作原理](../how-it-works.md)页面中描述的相同 — WebView 只是充当托管**文档编辑器**的浏览器，而**文档管理器**和**文档存储服务**仍由您负责，与任何集成方式相同。

:::note
移动网页编辑器仅在ONLYOFFICE文档的商业版本中可用：[企业版](https://www.onlyoffice.com/zh/docs-enterprise.aspx)和[开发者版](https://www.onlyoffice.com/zh/developer-edition.aspx)。
:::

有关平台特定的设置说明，请参阅：

<DocCardList items={[...[...useCurrentSidebarCategory().items]]} />
