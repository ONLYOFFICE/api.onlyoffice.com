---
hide_table_of_contents: true
description: 将段落转换为表格结构。
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 段落转表格

将编号的段落列表转换为表格格式。

```ts
(function () {
    let doc = Api.GetDocument();
    let paragraphs = doc.GetAllNumberedParagraphs();
    let tableData = [];
    let currentRow = [];

    for (let i = 0; i < paragraphs.length; i++) {
        let level = paragraphs[i].GetNumbering().GetLevelIndex();
        let text = paragraphs[i].GetText().trim();

        if (level === 0) {
            if (currentRow.length > 0) {
                tableData.push(currentRow);
            }
            currentRow = [text];
        } else if (level === 1 && currentRow.length > 0) {
            currentRow.push(text);
        }
    }

    if (currentRow.length > 0) {
        tableData.push(currentRow);
    }

    let maxColumns = 0;
    for (let j = 0; j < tableData.length; j++) {
        if (tableData[j].length > maxColumns) {
            maxColumns = tableData[j].length;
        }
    }

    let table = Api.CreateTable(maxColumns, tableData.length);
    doc.Push(table);
    for (let row = 0; row < tableData.length; row++) {
        for (let col = 0; col < tableData[row].length; col++) {
            table
                .GetCell(row, col)
                .GetContent()
                .GetElement(0)
                .AddText(tableData[row][col]);
        }
    }
})();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllNumberedParagraphs](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllNumberedParagraphs.md), [GetNumbering](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetNumbering.md), [GetLevelIndex](../../../office-api/usage-api/document-api/ApiNumberingLevel/Methods/GetLevelIndex.md), [GetText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetText.md), [CreateTable](../../../office-api/usage-api/document-api/Api/Methods/CreateTable.md), [Push](../../../office-api/usage-api/document-api/ApiDocument/Methods/Push.md), [GetCell](../../../office-api/usage-api/document-api/ApiTable/Methods/GetCell.md), [GetContent](../../../office-api/usage-api/document-api/ApiTableCell/Methods/GetContent.md), [GetElement](../../../office-api/usage-api/document-api/ApiDocumentContent/Methods/GetElement.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md)

## 结果

<Video src="/assets/video/macros/document-editor/paragraphs-to-table" dark />
