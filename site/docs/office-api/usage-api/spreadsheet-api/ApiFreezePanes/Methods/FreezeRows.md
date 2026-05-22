# FreezeRows

Freezes the top row or rows of the current worksheet.

## Syntax

```javascript
expression.FreezeRows(count);
```

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | Optional | Number | 0 | Optional number of rows to freeze, or zero to unfreeze all rows. |

## Returns

This method doesn't return any data.

## Example

Lock one or more top rows so they stay visible while scrolling down in a spreadsheet.

```javascript editor-xlsx
// How do I keep header rows from disappearing when scrolling through data in a spreadsheet?

// Pin the uppermost rows in place so column labels are always on screen in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.FreezeRows(1);
```
