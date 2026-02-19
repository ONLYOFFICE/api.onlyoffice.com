# Resize

Resizes the current range by changing the number of rows and columns.

## Syntax

```javascript
expression.Resize(rowSize, columnSize);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rowSize | Required | number |  | The number of rows for the new range. |
| columnSize | Required | number |  | The number of columns for the new range. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example shows how to resize a range to a different number of rows and columns.

```javascript editor-xlsx
// How to resize a range.

// Get a range, resize it and fill the resized range with color.

let worksheet = Api.GetActiveSheet();
let originalRange = worksheet.GetRange("B2:C3");
originalRange.SetValue("Original");
originalRange.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let resizedRange = originalRange.Resize(originalRange.Rows.Count + 2, originalRange.Columns.Count + 1);
resizedRange.SetBorders("InsideHorizontal", "Thick", Api.CreateColorFromRGB(255, 111, 61));
resizedRange.SetBorders("InsideVertical", "Thick", Api.CreateColorFromRGB(255, 111, 61));

```
