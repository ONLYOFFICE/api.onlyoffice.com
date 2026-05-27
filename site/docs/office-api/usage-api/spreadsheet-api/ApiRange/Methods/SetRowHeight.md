# SetRowHeight

Sets the row height value.

## Syntax

```javascript
expression.SetRowHeight(nHeight);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nHeight | Required | [pt](../../Enumeration/pt.md) |  | The row height in the current range measured in points. |

## Returns

boolean

## Example

Adjust the height of a row to a specific size in a spreadsheet.

```javascript editor-xlsx
// How do I make a row taller or shorter in a spreadsheet?

// Resize a row to fit content or improve the visual layout in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetRowHeight(32);
```
