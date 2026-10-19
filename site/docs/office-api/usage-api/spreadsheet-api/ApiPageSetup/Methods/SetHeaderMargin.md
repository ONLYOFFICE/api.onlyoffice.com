# SetHeaderMargin

Sets the distance from the top of the page to the header.

## Syntax

```javascript
expression.SetHeaderMargin(nMargin);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nMargin | Required | number |  | The header margin size measured in millimeters. |

## Returns

boolean

## Example

Set the distance from the top of the page to the header for printing in a spreadsheet.

```javascript editor-xlsx
// How do I change the header margin (distance from the page edge to the header) in a spreadsheet?

// Move the header closer to or further from the top edge of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetHeaderMargin(12.7);
```
