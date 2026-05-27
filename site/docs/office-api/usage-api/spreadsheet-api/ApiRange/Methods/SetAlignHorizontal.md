# SetAlignHorizontal

Sets the horizontal alignment of the text in the current cell range.

## Syntax

```javascript
expression.SetAlignHorizontal(sAlignment);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAlignment | Required | 'left' \| 'right' \| 'center' \| 'justify' |  | The horizontal alignment that will be applied to the cell contents. |

## Returns

boolean

## Example

Align text horizontally inside a cell range in a spreadsheet.

```javascript editor-xlsx
// How do I center or justify text across a group of cells in a spreadsheet?

// Control whether cell content sits to the left, center, or right within each cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetAlignHorizontal("center");
```
