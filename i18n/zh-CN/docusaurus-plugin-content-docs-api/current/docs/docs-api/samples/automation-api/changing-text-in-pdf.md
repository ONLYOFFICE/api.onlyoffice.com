---
sidebar_position: 3
hide_table_of_contents: true
description: 使用自动化 API 在 PDF 中查找和替换文本。
tags: ["PDF", "Integration", "External access", "Automation API"]
---

import { ChangeTextPdfExternalToolbar } from '@site/src/components/BrowserWindow';

# 在 PDF 中更改文本

使用自动化 API 通过外部界面在 PDF 文档中查找和替换文本 — 输入搜索词、指定替换文本，然后在所有页面上应用更改。

:::info
文档以 PDF 格式打开。您的代码调用 `connector.callCommand()` 来执行 Document Builder API 方法，识别页面内容、遍历文本对象并替换匹配的文本。
:::

<ChangeTextPdfExternalToolbar/>

## 它是如何运作的

1. 当用户输入搜索词和替换文本，然后点击 **Replace all** 时，使用 `connector.callCommand()` 方法在编辑器内部执行 Document Builder API 代码。代码使用 [GetPagesCount](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/GetPagesCount.md) 和 [GetPage](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/GetPage.md) 遍历所有页面，并在每个页面上调用 [RecognizeContent](/docs/office-api/usage-api/pdf-api/ApiPage/Methods/RecognizeContent.md) 获取所有绘图对象。对于每个形状，使用 [GetContent](/docs/office-api/usage-api/pdf-api/ApiShape/Methods/GetContent.md) 获取内部内容，通过 [GetElementsCount](/docs/office-api/usage-api/pdf-api/ApiDocumentContent/Methods/GetElementsCount.md) 和 [GetElement](/docs/office-api/usage-api/pdf-api/ApiDocumentContent/Methods/GetElement.md) 遍历段落，使用 [GetText](/docs/office-api/usage-api/pdf-api/ApiParagraph/Methods/GetText.md) 读取文本，并使用 [SetText](/docs/office-api/usage-api/pdf-api/ApiParagraph/Methods/SetText.md) 进行替换：

    ``` ts
    Asc.scope.replaceParams = { findText, replaceWith, matchCase };

    connector.callCommand(() => {
      const params = Asc.scope.replaceParams;
      const regex = new RegExp(
        params.findText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        params.matchCase ? "g" : "gi",
      );
      const doc = Api.GetDocument();
      const pageCount = doc.GetPagesCount();
      const results = [];

      for (let i = 0; i < pageCount; i++) {
        const page = doc.GetPage(i);
        const drawings = page.RecognizeContent();
        let pageReplacements = 0;

        for (let d = 0; d < drawings.length; d++) {
          const drawing = drawings[d];
          if (drawing.GetClassType() === "shape") {
            const content = drawing.GetContent();
            const elemCount = content.GetElementsCount();
            for (let e = 0; e < elemCount; e++) {
              const elem = content.GetElement(e);
              if (elem.GetClassType() === "paragraph") {
                const text = elem.GetText();
                const matches = text.match(regex);
                if (matches) {
                  elem.SetText(text.replace(regex, params.replaceWith));
                  pageReplacements += matches.length;
                }
              }
            }
          }
        }

        if (pageReplacements > 0) {
          results.push({ pageIndex: i, count: pageReplacements });
        }
      }

      return results;
    }, (results) => {
      // Display the replacement results in the external panel
    });
    ```

2. 外部面板显示每个页面的替换数量。每个结果显示替换了多少个匹配项以及它们在哪个页面上被找到。

:::note
请注意，该连接器仅适用于 **ONLYOFFICE 文档开发者版本**.

该连接器是一项需额外付费的高级功能。请参阅 [ONLYOFFICE 文档开发者版](https://www.onlyoffice.com/developer-edition-prices?from=api) 了解价格详情，或联系我们的销售团队 [sales@onlyoffice.com](mailto:sales@onlyoffice.com) 获取报价。
:::
