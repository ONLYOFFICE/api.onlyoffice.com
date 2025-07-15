# Delete comments

Deletes comments from a specified range of cells in the active worksheet.

```ts
(function () {
    // Get the active worksheet.
    let sheet = Api.GetActiveSheet();

    // Define sheet range and comment text to delete.
    let totalRows = 100;
    let totalCols = 100;
    let targetCommentText = "Comment 1";

    // Loop through the specified range of rows and columns.
    for (let row = 0; row <= totalRows; row++) {
        for (let col = 0; col <= totalCols; col++) {
            let cell = sheet.GetRangeByNumber(row, col);
            let comment = cell.GetComment();

            // Delete the comment if it matches the predefined text.
            if (comment && comment.GetText() === targetCommentText) {
                comment.Delete();
            }
        }
    }
})();
```

Methods used: [GetActiveSheet](/site/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](/site/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetComment](/site/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetComment.md), [GetText](/site/docs/office-api/usage-api/spreadsheet-api/ApiComment/Methods/GetText.md), [Delete](/site/docs/office-api/usage-api/spreadsheet-api/ApiComment/Methods/Delete.md)

## Result

![DeleteComments](/assets/images/plugins/delete-comments.png#gh-light-mode-only)
![DeleteComments](/assets/images/plugins/delete-comments.dark.png#gh-dark-mode-only)
