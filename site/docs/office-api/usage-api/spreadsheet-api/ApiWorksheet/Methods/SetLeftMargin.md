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

This method doesn't return any data.

## Example

Set the left margin of the sheet in a spreadsheet.

```javascript editor-xlsx
// How to set margin of the left side in a spreadsheet.

// Resize the left margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetLeftMargin(20.8);
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");
```
