# GetPrintHeadings

Returns the page PrintHeadings property which specifies whether the current sheet row/column headings must be printed or not.

## Syntax

```javascript
expression.GetPrintHeadings();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to get the page PrintHeadings property which specifies whether the sheet row/column headings must be printed or not.

```javascript editor-xlsx
// How to find out whether sheet headings should be printed or not.

// Get a boolean value representing whether to print row and column headings or not.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintHeadings(true);
worksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + worksheet.GetPrintHeadings());
```
