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

boolean

## Example

Modify row height for better visibility in a spreadsheet.

```javascript editor-xlsx
// How do I resize a row to be taller or shorter in a spreadsheet?

// Set the vertical dimension of a row to match your content needs in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetRowHeight(0, 30);
```
