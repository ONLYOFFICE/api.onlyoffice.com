# SetFooterMargin

Sets the distance from the bottom of the page to the footer.

## Syntax

```javascript
expression.SetFooterMargin(nMargin);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nMargin | Required | number |  | The footer margin size measured in millimeters. |

## Returns

boolean

## Example

Set the distance from the bottom of the page to the footer for printing in a spreadsheet.

```javascript editor-xlsx
// How do I change the footer margin (distance from the page edge to the footer) in a spreadsheet?

// Move the footer closer to or further from the bottom edge of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFooterMargin(12.7);
```
