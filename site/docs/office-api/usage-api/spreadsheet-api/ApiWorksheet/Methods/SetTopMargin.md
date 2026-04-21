# SetTopMargin

Sets the top margin of the sheet.

## Syntax

```javascript
expression.SetTopMargin(nPoints);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPoints | Required | number |  | The top margin size measured in points. |

## Returns

This method doesn't return any data.

## Example

Set the top margin of the sheet in a spreadsheet.

```javascript editor-xlsx
// How to set margin of the top side in a spreadsheet.

// Resize the top margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetTopMargin(25.1);
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");
```
