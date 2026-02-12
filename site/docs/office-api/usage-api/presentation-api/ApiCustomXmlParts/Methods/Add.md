# Add

Adds a new custom XML part to the XML manager.

## Syntax

```javascript
expression.Add(xml);
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xml | Required | string |  | The XML string to be added. |

## Returns

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md)

## Example

This example shows how to add a new custom XML part and then access it.

```javascript editor-pptx
// How to add a custom XML part to the presentation.

// Add a new XML part.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.SetFontSize(60);
run.AddText("New XML part added: " + newXml.GetXml());
paragraph.AddElement(run);
slide.AddObject(shape);
```
