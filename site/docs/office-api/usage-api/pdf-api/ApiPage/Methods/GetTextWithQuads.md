# GetTextWithQuads

Gets all text content on the page with quads per line.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetTextWithQuads();
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[TextWithQuads](../../Enumeration/TextWithQuads.md)[]

## Example

Get text content and its coordinates from a page in a PDF.

```javascript editor-pdf
// Useful for reading PDF page text together with its location.

// Extract page text lines with quadrilateral coordinates in a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
let page = doc.GetPage(0);
let fill = Api.CreateSolidFill(Api.RGB(50, 150, 250));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(10 * 12700, 10 * 12700);
let paragraph = shape.GetContent().GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Lorem selected text");
page.AddObject(shape);

let textWithQuads = page.GetTextWithQuads();
textWithQuads.forEach(function(item) {
	console.log(`Text: ${item.text}, quads: ${item.quads}`);
});
```
