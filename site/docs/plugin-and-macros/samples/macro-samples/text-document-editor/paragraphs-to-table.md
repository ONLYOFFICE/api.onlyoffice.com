---
hide_table_of_contents: true
---

# Paragraphs to table

Converts a list of numbered paragraphs into a table.

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

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllNumberedParagraphs](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllNumberedParagraphs.md), [GetNumbering](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetNumbering.md), [GetLevelIndex](/docs/office-api/usage-api/text-document-api/ApiNumberingLevel/Methods/GetLevelIndex.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md), [Push](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md), [GetCell](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetCell.md), [GetContent](/docs/office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md), [GetElement](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetElement.md), [AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md)

## Result

![ParagraphsToTable](/assets/images/plugins/paragraphs-to-table.png#gh-light-mode-only)
![ParagraphsToTable](/assets/images/plugins/paragraphs-to-table.dark.png#gh-dark-mode-only)
