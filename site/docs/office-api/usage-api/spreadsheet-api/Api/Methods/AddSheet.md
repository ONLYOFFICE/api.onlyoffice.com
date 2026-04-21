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

This method doesn't return any data.

## Example

Create a new worksheet.

```javascript editor-xlsx
// How to create a new worksheet.

// Add the sheet and display the result in a spreadsheet.

Api.AddSheet("New sheet");
```
