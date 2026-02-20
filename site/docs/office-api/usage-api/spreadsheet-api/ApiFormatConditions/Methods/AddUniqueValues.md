# AddUniqueValues

Adds a new unique values conditional formatting rule to the collection.

## Syntax

```javascript
expression.AddUniqueValues();
```

`expression` - A variable that represents a [ApiFormatConditions](../ApiFormatConditions.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiUniqueValues](../../ApiUniqueValues/ApiUniqueValues.md) \| null

## Example

This example adds unique values conditional formatting to a range.

```javascript editor-xlsx playground
// How to add unique values conditional formatting rules to highlight unique or duplicate values.

// Add unique values conditional formatting to cells.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Product Names");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");
worksheet.GetRange("A6").SetValue("Banana");
worksheet.GetRange("A7").SetValue("Grape");
worksheet.GetRange("A8").SetValue("Orange");
worksheet.GetRange("A9").SetValue("Kiwi");

let dataRange = worksheet.GetRange("A2:A9");
let formatConditions = dataRange.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.GetFont().SetColor(Api.CreateColorFromRGB(255, 0, 0));

```
