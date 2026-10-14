# SetCenterVertically

Sets whether the worksheet is centered vertically on the page when printed.

## Syntax

```javascript
expression.SetCenterVertically(bCenter);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bCenter | Required | boolean |  | Specifies whether the worksheet is centered vertically on the page. |

## Returns

boolean

## Example

Center the printed content vertically on the page in a spreadsheet.

```javascript editor-xlsx
// How do I center the worksheet between the top and bottom margins when printing in a spreadsheet?

// Make the printout vertically centered on the page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterVertically(true);
```
