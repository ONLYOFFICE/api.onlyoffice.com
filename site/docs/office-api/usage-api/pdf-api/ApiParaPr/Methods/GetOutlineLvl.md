# GetOutlineLvl

Returns the outline level of the specified properties.

## Syntax

```javascript
expression.GetOutlineLvl();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number \| undefined

## Example

Determine the outline hierarchy level of a paragraph in a PDF.

```javascript editor-pdf
// How do I check the outline level for document structure in a PDF?

// Get the nesting level used in document outline in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(10 * 36000, 10 * 36000);
page.AddObject(shape);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const paraPr = paragraph.GetParaPr();

const levelBefore = paraPr.GetOutlineLvl();
paraPr.SetOutlineLvl(8);
const levelAfter = paraPr.GetOutlineLvl();

let text =  'Outline level (index) for this paragraph is currently set to ' + levelAfter;
text += ',\n';
text += 'but originally was set to ' + levelBefore;
paragraph.AddText(text);
```
