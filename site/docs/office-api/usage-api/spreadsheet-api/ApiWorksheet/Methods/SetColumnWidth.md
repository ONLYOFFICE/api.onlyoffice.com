# SetColumnWidth

Sets the width of the specified column.
One unit of column width is equal to the width of one character in the Normal style.
For proportional fonts, the width of the character 0 (zero) is used.

## Syntax

```javascript
expression.SetColumnWidth(nColumn, nWidth, bWithotPaddings);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nColumn | Required | number |  | The number of the column to set the width to. |
| nWidth | Required | number |  | The width of the column divided by 7 pixels. |
| bWithotPaddings | Optional | boolean | false | Specifies whether nWidth will be set without standard paddings. |

## Returns

boolean

## Example

Assign a specific width to one or more columns in a spreadsheet.

```javascript editor-xlsx
// How do I change the width of a column in a spreadsheet?

// Widen or narrow columns to control how much content fits in each cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 10);
worksheet.SetColumnWidth(1, 20);
```
