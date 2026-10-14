# SetAlignMarginsHeaderFooter

Sets whether the header and footer margins are aligned with the page margins.

## Syntax

```javascript
expression.SetAlignMarginsHeaderFooter(bAlign);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bAlign | Required | boolean |  | Specifies whether the header and footer are aligned with the page margins. |

## Returns

boolean

## Example

Align the header and footer with the page margins for printing in a spreadsheet.

```javascript editor-xlsx
// How do I make the header and footer line up with the left and right page margins in a spreadsheet?

// Keep the header and footer aligned to the page margins instead of the printable area in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetAlignMarginsHeaderFooter(true);
```
