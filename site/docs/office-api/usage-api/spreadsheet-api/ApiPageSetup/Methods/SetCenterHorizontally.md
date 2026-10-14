# SetCenterHorizontally

Sets whether the worksheet is centered horizontally on the page when printed.

## Syntax

```javascript
expression.SetCenterHorizontally(bCenter);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bCenter | Required | boolean |  | Specifies whether the worksheet is centered horizontally on the page. |

## Returns

boolean

## Example

Center the printed content horizontally on the page in a spreadsheet.

```javascript editor-xlsx
// How do I center the worksheet between the left and right margins when printing in a spreadsheet?

// Make the printout horizontally centered on the page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterHorizontally(true);
```
