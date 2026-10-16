# Delete

Deletes the hyperlink.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents an [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Delete a hyperlink from a cell.

```javascript editor-xlsx
// Useful for removing a hyperlink while keeping the cell text.

// Delete a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
hyperlink.Delete();

worksheet.GetRange("A3").SetValue("Hyperlinks count after delete: " + worksheet.GetHyperlinks().length);
```
