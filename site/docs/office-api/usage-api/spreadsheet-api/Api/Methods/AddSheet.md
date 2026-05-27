# AddSheet

Creates a new worksheet. The new worksheet becomes the active sheet.

## Syntax

```javascript
expression.AddSheet(sName);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The name of a new worksheet. |

## Returns

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## Example

Insert a new sheet with a custom name into a spreadsheet.

```javascript editor-xlsx
// How do I add a new worksheet to an existing file in a spreadsheet?

// Expand the workbook by creating an additional sheet in a spreadsheet.

Api.AddSheet("New sheet");
```
