# GetClassType

Returns a type of the ApiSchemeColor class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiSchemeColor](../ApiSchemeColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"schemeColor"

## Example

This example gets a class type and pastes it into the presentation.

```javascript editor-pptx
// How to get a class type of ApiSchemeColor.

// Retrieve class type of ApiSchemeColor object and insert it to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const schemeColor = Api.CreateSchemeColor("dk1");
const fill = Api.CreateSolidFill(schemeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const classType = schemeColor.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
slide.AddObject(shape);

```
