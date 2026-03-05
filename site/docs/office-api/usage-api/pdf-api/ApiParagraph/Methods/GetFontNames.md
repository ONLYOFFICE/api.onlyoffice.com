# GetFontNames

Returns all font names from all elements inside the current paragraph.

## Syntax

```javascript
expression.GetFontNames();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string[]

## Example

This example shows how to get all font names from all elements inside the paragraph.

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.HexColor('#FF6F3D'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.RemoveAllElements();

let run = Api.CreateRun();
run.AddText('This is just a sample text. ');
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetFontFamily('Calibri Light');
run.AddText("This is a text run with the font family set to 'Calibri Light'.");
paragraph.AddElement(run);

const fonts = paragraph.GetFontNames();
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('Fonts: ' + fonts.join(', '));
docContent.Push(paragraph2);
page.AddObject(shape);

```
