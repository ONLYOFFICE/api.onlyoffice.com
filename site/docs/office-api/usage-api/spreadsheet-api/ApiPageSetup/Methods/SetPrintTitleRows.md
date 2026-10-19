# SetPrintTitleRows

Sets the rows that are repeated at the top of each printed page. Pass an empty string to clear them.

## Syntax

```javascript
expression.SetPrintTitleRows(sRange);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | Required | string |  | The rows to repeat (e.g. "$1:$1"). Empty string clears the print title rows. |

## Returns

boolean

## Example

Repeat header rows at the top of every printed page in a spreadsheet.

```javascript editor-xlsx
// How do I print the header row on every page in a spreadsheet?

// Keep the top rows visible on each printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintTitleRows("$1:$1");
```
