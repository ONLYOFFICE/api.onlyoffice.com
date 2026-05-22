# SetReferenceStyle

Sets the cell reference style.

## Syntax

```javascript
expression.SetReferenceStyle(sReferenceStyle);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReferenceStyle | Required | [ReferenceStyle](../../Enumeration/ReferenceStyle.md) |  | The cell reference style. |

## Returns

This method doesn't return any data.

## Example

Switch the cell addressing style between letter-column and row-column notation in a spreadsheet.

```javascript editor-xlsx
// How do I change the way cell addresses are displayed across the entire workbook in a spreadsheet?

// Choose a preferred coordinate style for all cell references and formulas in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.SetReferenceStyle("xlR1C1");
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
```
