# GetNodeValue

Returns the XML string representation of the current node content.

## Syntax

```javascript
expression.GetNodeValue();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the value of a custom XML node.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xmlText = '<zoo><animal species="Lion" id="101"><name>Leo</name><age>5</age></animal></zoo>';
const xml = xmlManager.Add(xmlText);
const node = xml.GetNodes('/zoo/animal')[0];
const nodeValue = node.GetNodeValue();

const fill = Api.CreateSolidFill(Api.HexColor('#81a181'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Node value: ' + nodeValue);

```
