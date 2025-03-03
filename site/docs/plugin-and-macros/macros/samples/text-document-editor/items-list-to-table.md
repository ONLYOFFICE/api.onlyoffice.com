# Items list to table

## Description

Converts a selected list of items into a table.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    try {
        const oDocument = Api.GetDocument();
        const paragraphs = oDocument.GetAllNumberedParagraphs();
        let tableData = [];
        let currentRow = [];

        for (let i = 0; i < paragraphs.length; i++) {
            let level = paragraphs[i].GetNumbering().GetLevelIndex();
            console.log(level);
            let text = paragraphs[i].GetText().trim();
            console.log(text);

            // If we find a level 0 item
            if (level === 0) {
                // If we have collected items, save them as a row
                if (currentRow.length > 0) {
                    tableData.push(currentRow);
                }
                // Start a new row with this level 0 item
                currentRow = [text];
            }
            // If we find a level 1 item, add it to current row
            else if (level === 1 && currentRow.length > 0) {
                currentRow.push(text);
            }
        }

        // Don't forget to add the last row if it exists
        if (currentRow.length > 0) {
            tableData.push(currentRow);
        }

        // Find the maximum number of columns needed
        let maxColumns = 0;
        for (let j = 0; j < tableData.length; j++) {
            if (tableData[j].length > maxColumns) {
                maxColumns = tableData[j].length;
            }
        }
        // Create the table

        let table = Api.CreateTable(maxColumns, tableData.length);
        oDocument.Push(table);
        // Fill  table
        for (let row = 0; row < tableData.length; row++) {
            for (let col = 0; col < tableData[row].length; col++) {
                table
                    .GetCell(row, col)
                    .GetContent()
                    .GetElement(0)
                    .AddText(tableData[row][col]);
            }
            console.log("ende");
        }
    } catch (error) {
        console.log("Error: " + error.message);
    }
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllNumberedParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllNumberedParagraphs.md), [GetNumbering](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetNumbering.md), [GetLevelIndex](../../../../office-api/usage-api/text-document-api/ApiNumberingLevel/Methods/GetLevelIndex.md), [GetText](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [CreateTable](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateTable.md), [GetCell](../../../../office-api/usage-api/text-document-api/ApiTableRow/Methods/GetCell.md), [GetContent](../../../../office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md), [GetElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetElement.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/AddText.md)

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

```vb
Sub ListToTable()
    Dim rowCount As Integer
    Dim colCount As Integer

    ' Prompt user for rows and columns
    rowCount = InputBox("Enter the number of rows:")
    colCount = InputBox("Enter the number of columns:")

    If Selection.Type = wdSelectionNormal Then
        ' Convert the selected list to a table
        Selection.ConvertToTable Separator:=wdSeparateByParagraphs, _
            NumRows:=rowCount, NumColumns:=colCount, _
            AutoFitBehavior:=wdAutoFitContent
        MsgBox "List converted to a table!"
    Else
        MsgBox "Please select a list first."
    End If
End Sub
```

## Result

<!-- imgpath -->

![items-list-to-table](/assets/images/plugins/items-list-to-table.png)
