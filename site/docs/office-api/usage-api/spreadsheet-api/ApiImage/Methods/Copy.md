# Copy

Creates a copy of the specified image.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiImage](../ApiImage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiImage](../../ApiImage/ApiImage.md)

## Example

Duplicate an image on a worksheet and place the copy next to the original in a spreadsheet.

```javascript editor-xlsx
// How do I make a copy of an image in a spreadsheet?

// Clone an image and add the copy to the sheet at a different cell anchor in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let image = worksheet.AddImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 60 * 36000, 35 * 36000, 0, 2 * 36000, 2, 3 * 36000);

let copyImage = image.Copy();
worksheet.AddDrawing(copyImage, 4, 2 * 36000, 2, 3 * 36000);
```
