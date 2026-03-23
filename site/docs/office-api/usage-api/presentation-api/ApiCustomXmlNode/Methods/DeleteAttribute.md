# DeleteAttribute

Deletes an attribute from the custom XML node.
If the attribute exists, it will be removed.

## Syntax

```javascript
expression.DeleteAttribute(name);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name of the attribute to delete. |

## Returns

boolean

## Example

This example shows how to delete an attribute from the current XML node.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xmlText = '<bookstore><book category="house"><title lang="en">The Odyssey</title></book></bookstore>';
const xml = xmlManager.Add(xmlText);
const node = xml.GetNodes('/bookstore/book')[0];
node.DeleteAttribute('category');

const fill = Api.CreateSolidFill(Api.RGB(205, 220, 232));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XML after deletion: ' + xml.GetXml());

```
