# Offset

Returns a Range object offset from the current range.

## Syntax

```javascript
expression.Offset(rowOffset, columnOffset);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rowOffset | Required | number |  | The number of rows to offset the range. |
| columnOffset | Required | number |  | The number of columns to offset the range. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Shift a range by a number of rows and columns to reach a new position in a spreadsheet.

```javascript editor-xlsx
// How do I move a selection to a different area by stepping over rows and columns in a spreadsheet?

// Highlight the displaced range with a background color to make its new position visible in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let originalRange = worksheet.GetRange("C3:D4");
originalRange.SetValue("Original");
originalRange.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let offsetRange = originalRange.Offset(2, 1);
offsetRange.SetValue("Offset");
offsetRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
