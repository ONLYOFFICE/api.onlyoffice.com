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

Sets a solid fill color to a shape.

```javascript editor-docx
// Creates a rectangle and applies a red fill to it.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, Api.CreateNoFill(), stroke);
paragraph.AddDrawing(shape);
paragraph.AddLineBreak();
paragraph.AddText("Original shape with no fill");
paragraph.AddLineBreak();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0));
shape.SetFill(fill);
paragraph.AddText("Fill changed to red");

```
