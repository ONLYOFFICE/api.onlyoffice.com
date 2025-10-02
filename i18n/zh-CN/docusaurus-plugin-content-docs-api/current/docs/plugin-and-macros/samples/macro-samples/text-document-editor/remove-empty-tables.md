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

使用的方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[获取所有表格](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllTables.md)，[获取单元格内容](/docs/office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md)，[获取所有段落](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetAllParagraphs.md)，[获取文本内容](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md)，[获取表格行数](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetRowsCount.md)，[获取表格行](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetRow.md)，[获取单元格数量](/docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/GetCellsCount.md)，[获取单元格](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetCell.md)，[删除表格](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/Delete.md)

## 结果

![删除空表格](/assets/images/plugins/remove-empty-tables.png#gh-light-mode-only)
![删除空表格](/assets/images/plugins/remove-empty-tables.dark.png#gh-dark-mode-only)
