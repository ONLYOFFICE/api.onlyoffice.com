# FormatAsTable

Formats the selected range of cells from the current sheet as a table (with the first row formatted as a header).
💡 As the first row is always formatted as a table header, you need to select at least two rows for the table to be formed correctly.

## Syntax

```javascript
expression.FormatAsTable(sRange);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | Required | string |  | The range of cells from the current sheet which will be formatted as a table. |

## Returns

boolean

## Example

Convert a cell range into a formatted table in a spreadsheet.

```javascript editor-xlsx
// How do I turn a plain data range into a structured table in a spreadsheet?

// Apply table styling to a range so data is easier to read and filter.

let worksheet = Api.GetActiveSheet();
worksheet.FormatAsTable("A1:E10");
```
