# GetVertAlign

Gets the vertical alignment type from the current text properties.

## Syntax

```javascript
expression.GetVertAlign();
```

`expression` - A variable that represents an [ApiRichTextPr](../ApiRichTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[TextVertAlign](../../Enumeration/TextVertAlign.md)

## Example

Check the vertical alignment of text in a PDF.

```javascript editor-pdf
// How do I find out if text is positioned higher or lower than normal in a PDF?

// Retrieve the vertical alignment setting of formatted text in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
let run = para.GetElement(0);
run.AddText("Some example text");

let textPr = run.GetTextPr();

console.log(`The vert align property is: ${textPr.GetVertAlign()}`);
```
