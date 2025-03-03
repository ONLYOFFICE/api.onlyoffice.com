# Conditional formatting rules

## Description

Applies multiple conditional formatting rules to the selected range.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    //Get selected range
    var ranges = Api.GetSelection();

    //Declare colors
    const red = Api.CreateColorFromRGB(255, 163, 163);
    const green = Api.CreateColorFromRGB(184, 255, 166);

    ranges.ForEach(function (range) {
        var value = range.GetValue();

        if (!value) {
            return;
        }
        //If value is between 300 to 1000 fill the cell with green
        if (value >= 300 && value <= 1000) {
            range.SetFillColor(green);
        } else if (value < 50) {
            //Else fill the cell with red
            range.SetFillColor(red);
        }

        //If value equals zero add comment to the cell
        if (value == 0) {
            range.AddComment("Check your formula or inputs, value should not be zero");
        }
    });
})();
```

Methods used: [GetSelection](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [CreateColorFromRGB](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md), [ForEach](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/ForEach.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetFillColor](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md), [AddComment](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AddComment.md)

## Result

<!-- imgpath -->

![](/assets/images/plugins/conditional-formatting-rules.png)