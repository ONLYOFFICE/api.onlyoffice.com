# Custom average function

Creates a custom function to calculate a weighted average.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    // Get the active worksheet.
    var oWorksheet = Api.GetActiveSheet();

    // Insert the formula into cell H2.
    // This calls the custom function 'weightedAverage' that was registered above.
    oWorksheet.GetRange("H2").SetValue("=WA(A$1:A$3, B$1:B$3)");

    // Optionally, insert a label in cell G2.
    oWorksheet.GetRange("G2").SetValue("Average:");
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
        var weightedSum = 0;
        var totalWeight = 0;
        for (var i = 0; i < values.length; i++) {
            var v = parseFloat(values[i]);
            var w = parseFloat(weights[i]);
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

Methods used: [GetActiveSheet](), [GetRange](), [SetValue]()

## Result

<!-- imgpath -->

![CustomAverageFunction](/assets/images/plugins/custom-average-function.png#gh-light-mode-only)![CustomAverageFunction](/assets/images/plugins/custom-average-function.dark.png#gh-dark-mode-only)