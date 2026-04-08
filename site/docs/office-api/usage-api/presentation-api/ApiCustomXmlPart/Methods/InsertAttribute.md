# InsertAttribute

Inserts an attribute into the XML node at the specified XPath.

## Syntax

```javascript
expression.InsertAttribute(xPath, name, value);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node to insert the attribute into. |
| name | Required | string |  | The name of the attribute to insert. |
| value | Required | string |  | The value of the attribute to insert. |

## Returns

boolean

## Example

This example shows how to insert an attribute into a custom XML node.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xml = xmlManager.Add('<content xmlns="http://example"></content>');
xml.InsertAttribute('/content', 'version', '1.0');

const fill = Api.CreateSolidFill(Api.RGB(191, 127, 63));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XML after insertion: ' + xml.GetXml());

```
