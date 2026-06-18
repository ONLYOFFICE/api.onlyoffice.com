---
hide_table_of_contents: true
description: Calculate a weighted average from cell values.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Weighted average function

Creates a [custom function](../../guides/adding-custom-functions.md) to calculate a weighted average.

```ts
(function () {
    // Get the active worksheet.
    let worksheet = Api.GetActiveSheet();

    // Insert the formula into cell H2.
    // This calls the custom function 'wa' that is registered below.
    worksheet.GetRange("H2").SetValue("=wa(A$2:A$6, B$2:B$6)");

    // Optionally, insert a label in cell G2.
    worksheet.GetRange("G2").SetValue("Average:");
})();

//custom function:

(function () {
    /**
     * Custom function that calculates the weighted average.
     * @customfunction
     * @param {number[][]} values An array (or range) of values.
     * @param {number[][]} weights An array (or range) of weights.
     * @returns {number} The weighted average.
    */

    function wa(values, weights) {
        console.log("start");
        // Flatten arrays if needed
        if (Array.isArray(values[0])) {
            values = values.map(function (row) { return row[0]; });
        }
        if (Array.isArray(weights[0])) {
            weights = weights.map(function (row) { return row[0]; });
        }
        // Check lengths
        if (values.length !== weights.length) {
            throw new Error("Values and weights arrays must have the same length.");
        }
        let weightedSum = 0;
        let totalWeight = 0;
        for (let i = 0; i < values.length; i++) {
            let v = parseFloat(values[i]);
            let w = parseFloat(weights[i]);
            if (!isNaN(v) && !isNaN(w)) {
                weightedSum += v * w;
                totalWeight += w;
            }
        }
        return totalWeight ? weightedSum / totalWeight : 0;
    }
    Api.AddCustomFunction(wa);
})();
```

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

<Video src="/assets/video/macros/spreadsheet-editor/weighted-average-function" dark />
