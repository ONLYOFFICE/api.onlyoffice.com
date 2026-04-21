# SetRowHeight

Sets the height of the specified row measured in points.
A point is 1/72 inch.

## Syntax

```javascript
expression.SetRowHeight(nRow, nHeight);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | Required | number |  | The number of the row to set the height to. |
| nHeight | Required | number |  | The height of the row measured in points. |

## Returns

This method doesn't return any data.

## Example

Set the height of the specified row measured in points in a spreadsheet.

```javascript editor-xlsx
// How to resize the height of the row in a spreadsheet.

// Set row height for a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetRowHeight(0, 30);
```
