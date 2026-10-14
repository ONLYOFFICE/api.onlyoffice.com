# SetPrintArea

Sets the range to be printed (the print area). Pass an empty string to clear it and print the whole sheet.

## Syntax

```javascript
expression.SetPrintArea(sRange);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | Required | string |  | The range address (e.g. "A1:D20"); comma-separated for several areas. Empty clears the print area. |

## Returns

boolean

## Example

Limit printing to a specific range (print area) of a worksheet in a spreadsheet.

```javascript editor-xlsx
// How do I print only a selected range instead of the whole sheet in a spreadsheet?

// Define which cells get printed by setting the print area in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintArea("A1:D20");
```
