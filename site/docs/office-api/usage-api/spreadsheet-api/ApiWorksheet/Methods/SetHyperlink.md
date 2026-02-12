# SetHyperlink

Adds a hyperlink to the specified range.

## Syntax

```javascript
expression.SetHyperlink(sRange, sAddress, subAddress, sScreenTip, sTextToDisplay);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | Required | string |  | The range where the hyperlink will be added to. |
| sAddress | Required | string |  | The link address. |
| subAddress | Optional | string |  | The link subaddress to insert internal sheet hyperlinks. |
| sScreenTip | Optional | string |  | The screen tip text. |
| sTextToDisplay | Optional | string |  | The link text that will be displayed on the sheet. |

## Returns

This method doesn't return any data.

## Example

This example adds a hyperlink to the specified range.

```javascript editor-xlsx playground
// How to add hyperlinks to the range.

// Add a hyperlink to the cell.

let worksheet = Api.GetActiveSheet();
const logoUrl = 'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png';
worksheet.SetHyperlink('A1', logoUrl, 'Api ONLYOFFICE', 'ONLYOFFICE for developers');

```
