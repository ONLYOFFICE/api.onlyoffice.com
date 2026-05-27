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

Duplicate an image and place the copy on another page in a PDF.

```javascript editor-pdf
// How do I make a copy of an image in a PDF?

// Create an exact duplicate of an image and add it to a new page in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const image = Api.CreateImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 60 * 36000, 60 * 36000);
image.SetPosition(608400, 1267200);
page.AddObject(image);

const copyImage = image.Copy();
const newPage = doc.AddPage(1);
newPage.AddObject(copyImage);
```
