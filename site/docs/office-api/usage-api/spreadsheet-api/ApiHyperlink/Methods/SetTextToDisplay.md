# SetTextToDisplay

Sets the text to be displayed for the hyperlink.

## Syntax

```javascript
expression.SetTextToDisplay(sText);
```

`expression` - A variable that represents an [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The text to display. |

## Returns

This method doesn't return any data.

## Example

Set a new display text for a hyperlink.

```javascript editor-xlsx
// Useful for changing the text shown in a cell for a hyperlink.

// Set a new display text for a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
hyperlink.SetTextToDisplay("Go to ONLYOFFICE");

worksheet.GetRange("A3").SetValue("New display text: " + hyperlink.GetTextToDisplay());
```
