# GetScreenTipText

Returns the screen tip text of the hyperlink.

## Syntax

```javascript
expression.GetScreenTipText();
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example returns the screen tip text of the hyperlink.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#B5D6E0'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText('ONLYOFFICE Document Builder');
paragraph.AddElement(run);

const infoParagraph = Api.CreateParagraph();
let hyperlink;

hyperlink = paragraph.AddHyperlink('https://api.onlyoffice.com/docbuilder/basic');
hyperlink.SetScreenTipText('ONLYOFFICE for developers');
infoParagraph.AddText('Text hyperlink screen tip: ' + hyperlink.GetScreenTipText());
infoParagraph.AddLineBreak();

shape.SetHyperlink(Api.CreateHyperlink('https://api.onlyoffice.com/', 'ONLYOFFICE website'));
hyperlink = shape.GetHyperlink();
infoParagraph.AddText('Shape hyperlink screen tip: ' + hyperlink.GetScreenTipText());

docContent.Push(infoParagraph);
slide.AddObject(shape);

```
