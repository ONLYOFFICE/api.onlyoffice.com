# SetDifferentFirstPageHeaderFooter

Sets whether a different header and footer is used on the first printed page.

## Syntax

```javascript
expression.SetDifferentFirstPageHeaderFooter(bDifferent);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bDifferent | Required | boolean |  | Specifies whether a different header and footer is used on the first page. |

## Returns

boolean

## Example

Use a different header and footer on the first printed page in a spreadsheet.

```javascript editor-xlsx
// How do I set a separate header/footer for the first page when printing in a spreadsheet?

// Enable a distinct first-page header and footer for printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetDifferentFirstPageHeaderFooter(true);
```
