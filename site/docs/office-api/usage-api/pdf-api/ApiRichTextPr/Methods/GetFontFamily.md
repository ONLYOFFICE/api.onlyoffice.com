# GetFontFamily

Returns the font family from the current text properties.

The method automatically calculates the font from the theme if the font was set via the theme.

## Syntax

```javascript
expression.GetFontFamily();
```

`expression` - A variable that represents an [ApiRichTextPr](../ApiRichTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null \| undefined

## Example

Find out which font is applied to text in a PDF.

```javascript editor-pdf
// How do I check what typeface a text uses in a PDF?

// Read the font selection for formatted text in a PDF.

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

console.log(`The font family property is: ${textPr.GetFontFamily()}`);
```
