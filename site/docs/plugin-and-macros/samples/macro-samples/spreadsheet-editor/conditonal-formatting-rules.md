# Conditional formatting rules

Applies multiple conditional formatting rules to the selected range.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    // Get the selected range
    let selectedRanges = Api.GetSelection();

    // Declare colors
    let redColor = Api.CreateColorFromRGB(255, 163, 163);
    let greenColor = Api.CreateColorFromRGB(184, 255, 166);

    selectedRanges.ForEach(function (cellRange) {
        let cellValue = cellRange.GetValue();

        if (!cellValue) {
            return;
        }
        // If value is between 300 and 1000, fill the cell with green
        if (cellValue >= 300 && cellValue <= 1000) {
            cellRange.SetFillColor(greenColor);
        } else if (cellValue < 50) {
            // Else fill the cell with red
            cellRange.SetFillColor(redColor);
        }

        // If value equals zero, add a comment to the cell
        if (cellValue == 0) {
            cellRange.AddComment("Check your formula or inputs, value should not be zero");
        }
    });
})();
```

Methods used: [GetSelection](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [CreateColorFromRGB](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md), [ForEach](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/ForEach.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetFillColor](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md), [AddComment](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AddComment.md)

## Result

<!-- imgpath -->

![Conditional formatting rules](/assets/images/plugins/conditional-formatting-rules.png#gh-light-mode-only)![Conditional formatting rules](/assets/images/plugins/conditional-formatting-rules.dark.png#gh-dark-mode-only)
