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

This example shows how to get a range offset from the current range.

```javascript editor-xlsx playground
// How to offset a range by rows and columns.

// Get a range, offset it and fill the offset range with color.

let worksheet = Api.GetActiveSheet();
let originalRange = worksheet.GetRange("C3:D4");
originalRange.SetValue("Original");
originalRange.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let offsetRange = originalRange.Offset(2, 1);
offsetRange.SetValue("Offset");
offsetRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

```
