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

Access the open workbook to read its properties in a spreadsheet.

```javascript editor-xlsx
// How do I retrieve information about the current workbook in a spreadsheet?

// Identify the workbook by name and display that name in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
const cell = worksheet.GetActiveCell();
const workbookName = workbook.GetName();
cell.SetValue(workbookName);
```
