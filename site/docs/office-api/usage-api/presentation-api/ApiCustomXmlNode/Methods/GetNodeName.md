# GetNodeName

Returns the name of the current XML node.

## Syntax

```javascript
expression.GetNodeName();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example demonstrates how to retrieve the name of the current XML node.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xmlText = '<documentData xmlns="http://example.com/example"><text>Sample text content</text></documentData>';
const xml = xmlManager.Add(xmlText);
const node = xml.GetNodes('/documentData/text')[0];
const nodeName = node.GetNodeName();

const fill = Api.CreateSolidFill(Api.HexColor('#4F3A7B'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Node name: ' + nodeName);

```
