# SetAddress

Sets the address of the target document.

## Syntax

```javascript
expression.SetAddress(sAddress);
```

`expression` - A variable that represents an [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAddress | Required | string |  | The hyperlink address. |

## Returns

This method doesn't return any data.

## Example

Set a new address for a hyperlink.

```javascript editor-xlsx
// Useful for changing the URL of an existing hyperlink in a cell.

// Set a new address for a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
hyperlink.SetAddress("https://helpcenter.onlyoffice.com");

worksheet.GetRange("A3").SetValue("New address: " + hyperlink.GetAddress());
```
