# GetParent

Returns the parent range object of the current format condition.

Inherited from [ApiFormatCondition.GetParent](../../ApiFormatCondition/Methods/GetParent.md).

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiDatabar](../ApiDatabar.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Read the cell range that owns a data bar formatting rule in a spreadsheet.

```javascript editor-xlsx
// How do I find out which range a data bar formatting rule belongs to in a spreadsheet?

// Trace back a data bar rule to the range it was applied to in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);

let dataRange = worksheet.GetRange("A2:A4");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let parent = dataBar.GetParent();

worksheet.GetRange("C1").SetValue("Parent range:");
worksheet.GetRange("C2").SetValue(parent.GetAddress());
```
