# Copy

Copies the current image.

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

Duplicate an image and add the copy to the same paragraph in a document.

```javascript editor-docx
// How do I make a copy of an image in a document?

// Clone an image so that two identical pictures appear in a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let image = Api.CreateImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 60 * 36000, 45 * 36000);
paragraph.AddDrawing(image);

let copyImage = image.Copy();
paragraph.AddDrawing(copyImage);
```
