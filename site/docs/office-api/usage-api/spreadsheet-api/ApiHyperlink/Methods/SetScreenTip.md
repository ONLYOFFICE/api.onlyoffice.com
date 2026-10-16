# SetScreenTip

Sets the screen tip text for the hyperlink.

## Syntax

```javascript
expression.SetScreenTip(sScreenTip);
```

`expression` - A variable that represents an [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sScreenTip | Required | string |  | The screen tip text. |

## Returns

This method doesn't return any data.

## Example

Set a new screen tip text for a hyperlink.

```javascript editor-xlsx
// Useful for changing the tooltip of an existing hyperlink in a cell.

// Set a new screen tip for a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE website", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
hyperlink.SetScreenTip("Go to ONLYOFFICE Help Center");

worksheet.GetRange("A3").SetValue("New screen tip: " + hyperlink.GetScreenTip());
```
