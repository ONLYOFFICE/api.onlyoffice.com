---
hide_table_of_contents: true
description: 从文档中删除所有空表格。
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 删除空表格

删除文档中的所有空表格。

```ts
(function () {
    let doc = Api.GetDocument();
    let tables = doc.GetAllTables();

    if (!tables || tables.length === 0) {
        return;
    }

    let removedCount = 0;
    let hasCellText = (cell) => {
        let content = cell.GetContent();
        let paragraphs = content.GetAllParagraphs();

        for (let para of paragraphs) {
            if (para.GetText().trim() !== "") {
                return true;
            }
        }
        return false;
    };

    for (let i = tables.length - 1; i >= 0; i--) {
        let table = tables[i];
        let hasContent = false;

        let rowCount = table.GetRowsCount();
        for (let row = 0; row < rowCount && !hasContent; row++) {
            let cellCount = table.GetRow(row).GetCellsCount();
            for (let cell = 0; cell < cellCount && !hasContent; cell++) {
                if (hasCellText(table.GetCell(row, cell))) {
                    hasContent = true;
                }
            }
        }

        if (!hasContent) {
            table.Delete();
            removedCount++;
        }
    }
})();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllTables](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllTables.md), [GetContent](../../../office-api/usage-api/document-api/ApiTableCell/Methods/GetContent.md), [GetAllParagraphs](../../../office-api/usage-api/document-api/ApiDocumentContent/Methods/GetAllParagraphs.md), [GetText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetText.md), [GetRowsCount](../../../office-api/usage-api/document-api/ApiTable/Methods/GetRowsCount.md), [GetRow](../../../office-api/usage-api/document-api/ApiTable/Methods/GetRow.md), [GetCellsCount](../../../office-api/usage-api/document-api/ApiTableRow/Methods/GetCellsCount.md), [GetCell](../../../office-api/usage-api/document-api/ApiTable/Methods/GetCell.md), [Delete](../../../office-api/usage-api/document-api/ApiTable/Methods/Delete.md)

## 结果

<Video src="/assets/video/macros/document-editor/remove-empty-tables" dark />
