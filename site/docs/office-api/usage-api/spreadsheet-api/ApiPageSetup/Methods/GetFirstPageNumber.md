# GetFirstPageNumber

Returns the first page number used when the worksheet is printed. Returns null when the page numbering is automatic.

## Syntax

```javascript
expression.GetFirstPageNumber();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number \| null

## Example

Read the first page number used when printing a spreadsheet.

```javascript editor-xlsx
// How do I find out what number the printed pages start from in a spreadsheet?

// Check the starting page number before printing a spreadsheet (null means automatic).

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFirstPageNumber(5);
let firstPageNumber = pageSetup.GetFirstPageNumber();
worksheet.GetRange("A1").SetValue("First page number: " + firstPageNumber);
```
