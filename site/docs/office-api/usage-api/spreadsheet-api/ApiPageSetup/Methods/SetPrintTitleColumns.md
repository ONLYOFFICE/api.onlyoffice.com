# SetPrintTitleColumns

Sets the columns that are repeated at the left of each printed page. Pass an empty string to clear them.

## Syntax

```javascript
expression.SetPrintTitleColumns(sRange);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | Required | string |  | The columns to repeat (e.g. "$A:$A"). Empty string clears the print title columns. |

## Returns

boolean

## Example

Repeat label columns at the left of every printed page in a spreadsheet.

```javascript editor-xlsx
// How do I print the first column on every page in a spreadsheet?

// Keep the left columns visible on each printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintTitleColumns("$A:$A");
```
