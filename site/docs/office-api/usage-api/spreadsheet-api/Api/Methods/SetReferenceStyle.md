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

Set reference style in a spreadsheet.

```javascript editor-xlsx
// How to set a style of a reference in a spreadsheet.

// Set reference style using ID in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.SetReferenceStyle("xlR1C1");
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
```
