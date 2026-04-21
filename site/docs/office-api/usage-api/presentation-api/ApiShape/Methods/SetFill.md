# SetFill

Sets the fill properties to the current shape.

## Syntax

```javascript
expression.SetFill(oFill);
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to fill the shape. |

## Returns

boolean

## Example

Set a solid fill color to a shape. Creates a rectangle and apply a red fill to it in a presentation.

```javascript editor-pptx
// How do I set fill in a presentation?

// Set fill using a shape object in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, Api.CreateNoFill(), stroke);
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);
let content = shape.GetDocContent();
let paragraph = content.GetElement(0);
paragraph.AddText("Original shape with no fill");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0));
shape.SetFill(fill);
paragraph.AddLineBreak();
paragraph.AddText("Fill changed to red");
```
