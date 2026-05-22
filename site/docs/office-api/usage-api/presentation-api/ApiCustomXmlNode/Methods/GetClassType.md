# GetClassType

Returns a type of the ApiCustomXmlNode class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"customXmlNode"

## Example

Determine the class type of an XML node in a presentation.

```javascript editor-pptx
// How do I find out what type an XML node object is in a presentation?

// Get the class name of an XML element in a presentation.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<zoo>
    <animal species="Lion" id="101">
        <name>Leo</name>
        <age>5</age>
        <habitat>Savanna</habitat>
        <diet>Carnivore</diet>
    </animal>
</zoo>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/zoo/animal')[0];
let classType = node.GetClassType();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.SetFontSize(60);
run.AddText("Class type of the node: " + classType);
paragraph.AddElement(run);
slide.AddObject(shape);
```
