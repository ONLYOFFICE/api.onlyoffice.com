# Sort range

Automatically sorts a selected range or the entire used range in a spreadsheet.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    let worksheet = Api.GetActiveSheet();
    let range;

    // Option 1 - Default: Get the entire used range
    range = worksheet.GetUsedRange();

    // Option 2: If you want to manually specify a range, uncomment the line below:
    // range = worksheet.GetRange("L19:N25");  // Example range, change as needed

    // Option 3: If you want to manually select a range, uncomment the line below:
    // range = Api.GetSelection();

    if (!range) {
        return;
    }

    let values = range.GetValue();
    if (values.length === 0) {
        return;
    }

    let firstColumnIndex = 0;
    let lastRowIndex = values.length - 1;

    // Figuring out where the first column starts
    for (let i = 1; i <= values[0].length; i++) {
        if (!values[lastRowIndex][i - 1]) {
            firstColumnIndex++;
        }
    }

    // Sorting logic: first column numerically, second column alphabetically
    values.sort(function (rowA, rowB) {
        let numA = parseFloat(rowA[firstColumnIndex]); // First column
        let numB = parseFloat(rowB[firstColumnIndex]);

        if (!isNaN(numA) && !isNaN(numB) && numA !== numB) {
            return numA - numB; // Sort numerically first
        }

        let textA = rowA[firstColumnIndex + 1]
            ? rowA[firstColumnIndex + 1].toString().toLowerCase()
            : "";
        let textB = rowB[firstColumnIndex + 1]
            ? rowB[firstColumnIndex + 1].toString().toLowerCase()
            : "";

        return textA.localeCompare(textB); // Sort alphabetically if numbers are the same
    });

    range.SetValue(values); // Reapply sorted data back to the selected range
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetSelection](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

<!-- imgpath -->

![AutomaticRangeSorter](/assets/images/plugins/automatic-range-sorter.png#gh-light-mode-only)![AutomaticRangeSorter](/assets/images/plugins/automatic-range-sorter.dark.png#gh-dark-mode-only)