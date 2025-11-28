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

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[获取所有编号段落](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllNumberedParagraphs.md)，[获取编号格式](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetNumbering.md)，[获取层级索引](/docs/office-api/usage-api/text-document-api/ApiNumberingLevel/Methods/GetLevelIndex.md)，[获取文本内容](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md)，[创建表格](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md)，[推送内容](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md)，[获取单元格](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetCell.md)，[获取单元格内容](/docs/office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md)，[获取元素](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetElement.md)，[添加文本](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md)

## 结果

![段落转表格](/assets/images/plugins/paragraphs-to-table.png#gh-light-mode-only)
![段落转表格](/assets/images/plugins/paragraphs-to-table.dark.png#gh-dark-mode-only)
