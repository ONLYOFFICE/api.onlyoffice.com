# GetClassType

Returns a type of the ApiRichTextPr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRichTextPr](../ApiRichTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"richTextPr"

## Example

Identify the object type of text properties in a PDF.

```javascript editor-pdf
// How do I determine what kind of object handles text formatting in a PDF?

// Verify the class type of a text properties object in a PDF.

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

console.log(`Object class type is: ${textPr.GetClassType()}`);
```
