# SetXml

Sets the XML content of the current XML node.

## Syntax

```javascript
expression.SetXml(strXml);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| strXml | Required | string |  | The XML string to set as the node content. |

## Returns

boolean

## Example

This example shows how to set the XML content of the current XML node.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xmlText = '<bookstore><book><title lang="en">The Odyssey</title><author>Homer</author></book></bookstore>';
const xml = xmlManager.Add(xmlText);
const node = xml.GetNodes('/bookstore/book')[0];
node.SetXml('<book><title lang="en">JavaScript Guide</title></book>');

const fill = Api.CreateSolidFill(Api.RGB(127, 127, 196));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XML after SetXml:\n' + xml.GetXml());

```
