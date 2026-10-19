# SetScaleWithDocHeaderFooter

Sets whether the header and footer are scaled with the document when it is scaled for printing.

## Syntax

```javascript
expression.SetScaleWithDocHeaderFooter(bScale);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bScale | Required | boolean |  | Specifies whether the header and footer are scaled with the document. |

## Returns

boolean

## Example

Scale the header and footer together with the worksheet when printing in a spreadsheet.

```javascript editor-xlsx
// How do I keep the header/footer font size in sync with the print scaling in a spreadsheet?

// Make the header and footer shrink or grow with the document scale when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetScaleWithDocHeaderFooter(true);
```
