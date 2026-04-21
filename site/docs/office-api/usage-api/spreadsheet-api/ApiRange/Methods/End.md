# End

Returns a Range object that represents the end in the specified direction in the specified range.

## Syntax

```javascript
expression.End(direction);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| direction | Required | [Direction](../../Enumeration/Direction.md) |  | The direction of end in the specified range. * |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Get a Range object that represents the end in the specified direction in the specified range in a spreadsheet.

```javascript editor-xlsx
// Get a left end part of a range and fill it with color in a spreadsheet.

// Get a specified direction end of a range in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("C4:D5");
range.End("xlToLeft").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
