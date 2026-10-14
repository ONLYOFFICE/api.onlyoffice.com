# SetFitToPagesWide

Sets the number of pages wide the worksheet is scaled to when printed (0 means automatic). Setting this property turns on the "fit to page" mode.

## Syntax

```javascript
expression.SetFitToPagesWide(nPages);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPages | Required | number |  | The number of pages wide (0 for automatic). |

## Returns

boolean

## Example

Scale the printout to fit a given number of pages wide in a spreadsheet.

```javascript editor-xlsx
// How do I fit all columns onto one page wide when printing in a spreadsheet?

// Shrink the worksheet so it prints within a fixed number of pages horizontally in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFitToPagesWide(1);
```
