# InsertElement

Inserts an XML element at the specified XPath.

## Syntax

```javascript
expression.InsertElement(xPath, xmlStr, index);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the parent node where the new element will be inserted. |
| xmlStr | Required | string |  | The XML string to insert. |
| index | Optional | number |  | The position at which to insert the new XML element. If omitted, the element will be appended as the last child. |

## Returns

boolean

## Example

This example shows how to insert a new XML element into the custom XML part.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xml = xmlManager.Add('<content xmlns="http://example"></content>');
xml.InsertElement('/content', '<description>Main content</description>');
xml.InsertElement('/content', '<title>Introduction</title>', 0);

const fill = Api.CreateSolidFill(Api.HexColor('#689F38'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XML after insertion: ' + xml.GetXml());

```
