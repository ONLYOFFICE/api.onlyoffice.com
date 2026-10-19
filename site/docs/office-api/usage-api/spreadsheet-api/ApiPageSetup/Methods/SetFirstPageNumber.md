# SetFirstPageNumber

Sets the first page number used when the worksheet is printed.

## Syntax

```javascript
expression.SetFirstPageNumber(nNumber);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nNumber | Required | number |  | The first page number. |

## Returns

boolean

## Example

Set the number printed on the first page of a spreadsheet.

```javascript editor-xlsx
// How do I make page numbering start from a specific number when printing a spreadsheet?

// Begin the printed page numbers at a custom value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFirstPageNumber(5);
```
