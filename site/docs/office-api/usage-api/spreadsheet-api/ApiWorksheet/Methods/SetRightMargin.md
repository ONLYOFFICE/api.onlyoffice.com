# SetRightMargin

Sets the right margin of the sheet.

## Syntax

```javascript
expression.SetRightMargin(nPoints);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPoints | Required | number |  | The right margin size measured in points. |

## Returns

boolean

## Example

Set the right margin width for printed pages in a spreadsheet.

```javascript editor-xlsx
// How do I control the empty space along the right edge when printing in a spreadsheet?

// Determine how much blank space appears between your data and the right page boundary in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetRightMargin(20.8);
let rightMargin = worksheet.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + rightMargin + " mm");
```
