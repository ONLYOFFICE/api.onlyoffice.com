# SetBottomMargin

Sets the bottom margin of the sheet.

## Syntax

```javascript
expression.SetBottomMargin(nPoints);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPoints | Required | number |  | The bottom margin size measured in points. |

## Returns

boolean

## Example

Define the bottom page margin for a sheet in a spreadsheet.

```javascript editor-xlsx
// How do I set the bottom margin of a worksheet in a spreadsheet?

// Adjust the spacing at the bottom of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetBottomMargin(25.1);
let bottomMargin = worksheet.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");
```
