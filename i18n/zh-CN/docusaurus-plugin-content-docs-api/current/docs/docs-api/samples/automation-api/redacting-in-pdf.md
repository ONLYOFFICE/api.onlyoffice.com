---
sidebar_position: 2
hide_table_of_contents: true
description: 使用自动化 API 在 PDF 中搜索并涂黑敏感文本。
tags: ["PDF", "Integration", "External access", "Automation API"]
---

import { RedactPdfExternalToolbar } from '@site/src/components/BrowserWindow';

# 在 PDF 中涂黑

使用自动化 API 在 PDF 文档中查找敏感文本，并通过外部界面永久涂黑所有匹配项 — 输入搜索词、设置选项、预览涂黑标记，然后应用涂黑。

:::info
文档以 PDF 格式打开。您的代码调用 `connector.callCommand()` 来执行 Document Builder API 方法，搜索文本并创建涂黑注释。当用户确认后，涂黑将被永久应用。
:::

<RedactPdfExternalToolbar/>

## 它是如何运作的

1. 当用户输入文本并点击 **Find** 时，使用 `connector.callCommand()` 方法在编辑器内部执行 Document Builder API 代码。代码在文档上调用 [SearchAndRedact](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/SearchAndRedact.md)，搜索所有匹配项并为每个匹配项创建涂黑注释。该方法返回一个 [ApiRedactAnnotation](/docs/office-api/usage-api/pdf-api/ApiRedactAnnotation/ApiRedactAnnotation.md) 对象数组：

    ``` ts
    Asc.scope.redactParams = { text, matchCase, wholeWords };

    connector.callCommand(() => {
      const params = Asc.scope.redactParams;
      const doc = Api.GetDocument();
      const annots = doc.SearchAndRedact({
        text: params.text,
        matchCase: params.matchCase,
        wholeWords: params.wholeWords,
      });

      const ids = [];
      if (annots && annots.length > 0) {
        for (let i = 0; i < annots.length; i++) {
          ids.push(annots[i].GetInternalId());
        }
      }

      return { count: ids.length, ids };
    }, (result) => {
      // Display the number of redaction marks in the external panel
    });
    ```

2. 外部面板显示涂黑标记的总数及其状态。当用户点击 **Apply redaction** 时，调用 [ApplyRedact](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/ApplyRedact.md) 方法从 PDF 中永久删除涂黑的内容：

    ``` ts
    connector.callCommand(() => {
      const doc = Api.GetDocument();
      doc.ApplyRedact();
    });
    ```

3. 当用户点击 **Clear marks** 时，涂黑注释将被移除而不被应用。代码遍历所有页面，使用 [GetAllAnnots](/docs/office-api/usage-api/pdf-api/ApiPage/Methods/GetAllAnnots.md) 获取注释，并使用 [Delete](/docs/office-api/usage-api/pdf-api/ApiRedactAnnotation/Methods/Delete.md) 方法删除匹配的涂黑注释：

    ``` ts
    Asc.scope.annotIds = redactAnnotIds;

    connector.callCommand(() => {
      const ids = Asc.scope.annotIds;
      const doc = Api.GetDocument();
      const pageCount = doc.GetPagesCount();
      for (let i = 0; i < pageCount; i++) {
        const page = doc.GetPage(i);
        const annots = page.GetAllAnnots();
        for (let j = annots.length - 1; j >= 0; j--) {
          for (let k = 0; k < ids.length; k++) {
            if (annots[j].GetInternalId() === ids[k]) {
              annots[j].Delete();
              break;
            }
          }
        }
      }
    });
    ```

:::note
请注意，该连接器仅适用于 **ONLYOFFICE 文档开发者版本**。

该连接器是一项需额外付费的高级功能。请参阅 [ONLYOFFICE 文档开发者版](https://www.onlyoffice.com/developer-edition-prices?from=api) 了解价格详情，或联系我们的销售团队 [sales@onlyoffice.com](mailto:sales@onlyoffice.com) 获取报价。
:::
