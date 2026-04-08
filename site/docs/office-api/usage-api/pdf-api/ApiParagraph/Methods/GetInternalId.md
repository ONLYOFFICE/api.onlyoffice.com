# GetInternalId

Returns an internal ID of the current content paragraph.

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the internal ID of a paragraph.

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('This is just a sample text.');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('Internal Id: ' + paragraph.GetInternalId());
docContent.Push(paragraph2);
page.AddObject(shape);

```
