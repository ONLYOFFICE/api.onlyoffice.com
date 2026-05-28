# FreezeColumns

Freezes the first column or columns of the current worksheet.

## Syntax

```javascript
expression.FreezeColumns(count);
```

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | Optional | Number | 0 | Optional number of columns to freeze, or zero to unfreeze all columns. |

## Returns

This method doesn't return any data.

## Example

Lock one or more leftmost columns so they remain visible while scrolling right in a spreadsheet.

```javascript editor-xlsx
// How do I stop columns from moving out of view when scrolling horizontally in a spreadsheet?

// Pin the leading columns in place to keep key labels visible at all times in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.FreezeColumns(1);
```
