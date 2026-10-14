# SetOddAndEvenPagesHeaderFooter

Sets whether different headers and footers are used on odd and even printed pages.

## Syntax

```javascript
expression.SetOddAndEvenPagesHeaderFooter(bDifferent);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bDifferent | Required | boolean |  | Specifies whether different headers and footers are used on odd and even pages. |

## Returns

boolean

## Example

Use different headers and footers on odd and even pages in a spreadsheet.

```javascript editor-xlsx
// How do I set separate headers/footers for odd and even pages when printing in a spreadsheet?

// Enable distinct odd and even page headers and footers for printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
pageSetup.GetEvenPage().GetCenterHeader().SetText("Even page &P");
```
