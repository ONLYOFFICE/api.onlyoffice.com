# GetClassType

Returns a type of the ApiCustomXmlParts class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"customXmlParts"

## Example

This example shows how to get the class type of the custom XML parts manager.

```javascript editor-pptx
// How to get the class type of the XML parts manager.

// Get the class type.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let classType = xmlManager.GetClassType();
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
run.AddText("XML manager class type: " + classType);
paragraph.AddElement(run);
slide.AddObject(shape);
```
