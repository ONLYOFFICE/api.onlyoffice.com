---
sidebar_position:
---

## Description

Automatically sorts a selected range or the entire used range in a spreadsheet.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    var oWorksheet = Api.GetActiveSheet();
    var oRange;

    // Option 1 - Default: Get the entire used range
    oRange = oWorksheet.GetUsedRange();

    // Option 2: If you want to manually specify a range, uncomment the line below:
    // oRange = oWorksheet.GetRange("L19:N25");  // Example range, change as needed

    // Option 3: If you want to manually select a range, uncomment the line below:
    // oRange = Api.GetSelection();

    if (!oRange) {
        return;
    }

    var data = oRange.GetValue();
    if (data.length === 0) {
        return;
    }

    var firstRowAt = 0;
    var lastindex = data.length - 1;

    // Figuring out where the first column starts
    for (var i = 1; i <= data[0].length; i++) {
        if (!data[lastindex][i - 1]) {
            firstRowAt++;
        }
    }

    // Sorting logic: first column numerically, second column alphabetically
    data.sort(function (a, b) {
        var numA = parseFloat(a[firstRowAt]); // First column
        var numB = parseFloat(b[firstRowAt]);

        if (!isNaN(numA) && !isNaN(numB) && numA !== numB) {
            return numA - numB; // Sort numerically first
        }

        var textA = a[firstRowAt + 1]
            ? a[firstRowAt + 1].toString().toLowerCase()
            : "";
        var textB = b[firstRowAt + 1]
            ? b[firstRowAt + 1].toString().toLowerCase()
            : "";

        return textA.localeCompare(textB); // Sort alphabetically if numbers are the same
    });

    oRange.SetValue(data); // Reapply sorted data back to the selected range
})();
```

Methods used: GetActiveSheet, GetUsedRange, GetRange, GetSelection, GetValue, SetValue

## Result

<!-- imgpath -->

![](/assets/images/plugins/automatic-range-sorter.png)

