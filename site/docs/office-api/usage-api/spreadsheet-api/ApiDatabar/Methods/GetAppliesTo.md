# GetAppliesTo

Returns the range of cells to which the current conditional formatting rule applies.

Inherited from [ApiFormatCondition.GetAppliesTo](../../ApiFormatCondition/Methods/GetAppliesTo.md).

## Syntax

```javascript
expression.GetAppliesTo();
```

`expression` - A variable that represents an [ApiDatabar](../ApiDatabar.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Find out which cells a bar-style formatting rule is applied to in a spreadsheet.

```javascript editor-xlsx
// How do I check what range is covered by a data bar formatting rule in a spreadsheet?

// Identify the exact cell range targeted by a bar visual rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);

let dataRange = worksheet.GetRange("A2:A4");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let appliesTo = dataBar.GetAppliesTo();

worksheet.GetRange("C1").SetValue("Data bar applies to:");
worksheet.GetRange("C2").SetValue(appliesTo.GetAddress());
```
