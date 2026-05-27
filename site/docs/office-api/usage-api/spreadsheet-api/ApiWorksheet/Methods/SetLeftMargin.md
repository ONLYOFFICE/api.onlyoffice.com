# SetLeftMargin

Sets the left margin of the sheet.

## Syntax

```javascript
expression.SetLeftMargin(nPoints);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPoints | Required | number |  | The left margin size measured in points. |

## Returns

boolean

## Example

Define the left page margin for a sheet in a spreadsheet.

```javascript editor-xlsx
// How do I set the left margin of a worksheet in a spreadsheet?

// Adjust the spacing on the left side of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetLeftMargin(20.8);
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");
```
