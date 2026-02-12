# GetCustomXmlParts

Retrieves the custom XML manager associated with the presentation.
This manager allows manipulation and access to custom XML parts within the presentation.

## Syntax

```javascript
expression.GetCustomXmlParts();
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiCustomXmlParts](../../ApiCustomXmlParts/ApiCustomXmlParts.md) \| null

## Example

This example shows how to get the custom XML manager, add a new XML part, and retrieve it by its ID.

```javascript editor-pptx playground
// How to get custom XML parts from the presentation.

// Get the custom XML parts manager.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let xmlText = "<content><text>Example XML</text></content>";
let xmlPart = xmlManager.Add(xmlText);
let xmlId = xmlPart.GetId();
let retrievedXml = xmlManager.GetById(xmlId);
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
run.AddText("Retrieved XML: " + retrievedXml.GetXml());
paragraph.AddElement(run);
slide.AddObject(shape);
```
