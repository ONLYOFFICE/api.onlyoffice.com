---
sidebar_position: -6
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# Mobile integration

ONLYOFFICE Docs can run inside a native mobile application. The approach is to load the **document editor** in a WebView component ([WebView](https://developer.android.com/reference/android/webkit/WebView) on Android, [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) on iOS) — the same editor that runs in a desktop browser, but with the [`type`](../../../usage-api/config/config.md#type) parameter set to `"mobile"` so the UI is optimized for touch screens:

``` ts
const config = {
  type: "mobile",
  // ...the rest of the editor config
};
```

Users can view and edit text documents, spreadsheets, presentations, and PDFs directly on their devices. The integration architecture is the same as described on the [How it works](../how-it-works.md) page — the WebView simply acts as the browser that hosts the **document editor**, while the **document manager** and **document storage service** remain your responsibility, as in any integration.

:::note
Mobile web editors are available only in commercial builds of ONLYOFFICE Docs: [Enterprise](https://www.onlyoffice.com/docs-enterprise.aspx) and [Developer](https://www.onlyoffice.com/developer-edition.aspx).
:::

For platform-specific setup instructions, see:

<DocCardList items={[...[...useCurrentSidebarCategory().items]]} />
