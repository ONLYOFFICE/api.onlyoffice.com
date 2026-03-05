# UpdateAttribute

Updates an attribute of the XML node at the specified XPath.

## Syntax

```javascript
expression.UpdateAttribute(xPath, name, value);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node whose attribute should be updated. |
| name | Required | string |  | The name of the attribute to update. |
| value | Required | string |  | The new value for the attribute. |

## Returns

boolean

## Example

This example shows how to update the value of an attribute in a custom XML node.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xml = xmlManager.Add('<content xmlns="http://example" version="1.0"></content>');
xml.UpdateAttribute('/content', 'version', '2.0');

const fill = Api.CreateSolidFill(Api.HexColor('#00897B'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XML after update: ' + xml.GetXml());

```
