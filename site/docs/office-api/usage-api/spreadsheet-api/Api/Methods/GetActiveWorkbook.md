# GetActiveWorkbook

Returns an object that represents the active workbook.

## Syntax

```javascript
expression.GetActiveWorkbook();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWorkbook](../../ApiWorkbook/ApiWorkbook.md)

## Example

This example shows how to get an object that represents the active workbook.

```javascript editor-xlsx playground
const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
const cell = worksheet.GetActiveCell();
const workbookName = workbook.GetName();
cell.SetValue(workbookName);

```
