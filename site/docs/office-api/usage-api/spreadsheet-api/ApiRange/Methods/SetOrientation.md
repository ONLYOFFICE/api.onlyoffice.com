# SetOrientation

Sets an angle to the current cell range.

## Syntax

```javascript
expression.SetOrientation(angle);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| angle | Required | [Angle](../../Enumeration/Angle.md) |  | Specifies the range angle. |

## Returns

This method doesn't return any data.

## Example

Rotate the text inside a cell range in a spreadsheet.

```javascript editor-xlsx
// How do I tilt or angle the text in a group of cells in a spreadsheet?

// Change the direction text flows within cells to improve layout in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
let range = worksheet.GetRange("A1:B1");
range.SetOrientation("xlUpward");
```
