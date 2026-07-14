---
sidebar_position: 1
hide_table_of_contents: true
description: 使用自动化 API 在 PDF 中搜索并高亮显示文本。
tags: ["PDF", "Integration", "External access", "Automation API"]
---

import { SearchPdfExternalToolbar } from '@site/src/components/BrowserWindow';

# 在 PDF 中搜索

使用自动化 API 在 PDF 文档中搜索文本，并通过外部界面高亮显示所有匹配项 — 输入搜索词、设置选项，即可实时查看高亮显示的结果。

:::info
文档以 PDF 格式打开。您的代码调用 `connector.callCommand()` 来执行 Document Builder API 方法，在每个页面上搜索文本并创建高亮注释。结果显示在外部面板中。
:::

<SearchPdfExternalToolbar/>

## 它是如何运作的

1. 当用户输入搜索词并点击 **Search** 时，使用 `connector.callCommand()` 方法在编辑器内部执行 Document Builder API 代码。代码使用 [GetPagesCount](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/GetPagesCount.md) 和 [GetPage](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/GetPage.md) 遍历所有页面，并在每个页面上调用 [Search](/docs/office-api/usage-api/pdf-api/ApiPage/Methods/Search.md) 方法。每个匹配项都使用 [CreateHighlightAnnot](/docs/office-api/usage-api/pdf-api/Api/Methods/CreateHighlightAnnot.md) 进行高亮标注，并作为单独的结果返回：

    ``` ts
    Asc.scope.searchParams = { text, matchCase, wholeWords };

    connector.callCommand(() => {
      const params = Asc.scope.searchParams;
      const doc = Api.GetDocument();
      const pageCount = doc.GetPagesCount();
      const results = [];

      for (let i = 0; i < pageCount; i++) {
        const page = doc.GetPage(i);
        const quads = page.Search({
          text: params.text,
          matchCase: params.matchCase,
          wholeWords: params.wholeWords,
        });

        if (quads && quads.length > 0) {
          for (let q = 0; q < quads.length; q++) {
            const annot = Api.CreateHighlightAnnot([quads[q]]);
            annot.SetAuthorName("__search_demo__");
            annot.SetFillColor(Api.RGB(255, 234, 0));
            page.AddObject(annot);
            results.push({ pageIndex: i, quad: quads[q] });
          }
        }
      }

      return results;
    }, (results) => {
      // Display individual results in the external panel
    });
    ```

2. 每个结果在外部面板中显示为可点击的项目。当用户点击某个结果或使用 **Prev / Next** 按钮时，调用 [SetSelection](/docs/office-api/usage-api/pdf-api/ApiPage/Methods/SetSelection.md) 方法导航到 PDF 中的匹配位置：

    ``` ts
    Asc.scope.navTarget = { pageIndex: result.pageIndex, quad: result.quad };

    connector.callCommand(() => {
      const target = Asc.scope.navTarget;
      const doc = Api.GetDocument();
      const page = doc.GetPage(target.pageIndex);
      const q = target.quad;
      page.SetSelection({ x: q[0], y: q[1] }, { x: q[2], y: q[3] });
    });
    ```

3. 当用户点击 **Clear highlights** 时，第二个 `connector.callCommand()` 遍历所有页面，使用 [GetAllAnnots](/docs/office-api/usage-api/pdf-api/ApiPage/Methods/GetAllAnnots.md) 获取注释，并使用 [Delete](/docs/office-api/usage-api/pdf-api/ApiHighlightAnnotation/Methods/Delete.md) 方法移除搜索高亮：

    ``` ts
    connector.callCommand(() => {
      const doc = Api.GetDocument();
      const pageCount = doc.GetPagesCount();
      for (let i = 0; i < pageCount; i++) {
        const page = doc.GetPage(i);
        const annots = page.GetAllAnnots();
        for (let j = annots.length - 1; j >= 0; j--) {
          if (annots[j].GetAuthorName() === "__search_demo__") {
            annots[j].Delete();
          }
        }
      }
    });
    ```

:::note
请注意，该连接器仅适用于 **ONLYOFFICE 文档开发者版本**.

该连接器是一项需额外付费的高级功能。请参阅 [ONLYOFFICE 文档开发者版](https://www.onlyoffice.com/developer-edition-prices?from=api) 了解价格详情，或联系我们的销售团队 [sales@onlyoffice.com](mailto:sales@onlyoffice.com) 获取报价。
:::
