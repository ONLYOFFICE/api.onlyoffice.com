# Remove empty tables

Removes all the empty tables from the document.

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

Methods used: [GetDocument](/site/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllTables](/site/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllTables.md), [GetContent](/site/docs/office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md), [GetAllParagraphs](/site/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetAllParagraphs.md), [GetText](/site/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [GetRowsCount](/site/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetRowsCount.md), [GetRow](/site/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetRow.md), [GetCellsCount](/site/docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/GetCellsCount.md), [GetCell](/site/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetCell.md), [Delete](/site/docs/office-api/usage-api/text-document-api/ApiTable/Methods/Delete.md)

## Result

![RemoveEmptyTables](/assets/images/plugins/remove-empty-tables.png#gh-light-mode-only)
![RemoveEmptyTables](/assets/images/plugins/remove-empty-tables.dark.png#gh-dark-mode-only)
