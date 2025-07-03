# CreateShape

Creates a shape with the parameters specified.

## Syntax

```javascript
expression.CreateShape(sType, nWidth, nHeight, oFill, oStroke);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Optional | [ShapeType](../../Enumeration/ShapeType.md) | "rect" | The shape type which specifies the preset shape geometry. |
| nWidth | Optional | [EMU](../../Enumeration/EMU.md) | 914400 | The shape width in English measure units. |
| nHeight | Optional | [EMU](../../Enumeration/EMU.md) | 914400 | The shape height in English measure units. |
| oFill | Optional | [ApiFill](../../ApiFill/ApiFill.md) | Api.CreateNoFill() | The color or pattern used to fill the shape. |
| oStroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) | Api.CreateStroke(0, Api.CreateNoFill()) | The stroke used to create the element shadow. |

## Returns

[ApiShape](../../ApiShape/ApiShape.md)

## Example

This example creates a shape using the 'flowChartMagneticTape' preset.

```javascript editor-pptx
// How to add a new flowchart shape.

// Add a new shape indicating its properties.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);

let run = Api.CreateRun();
run.SetFontSize(60);
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetFontSize(60);
run.SetFontFamily("Comic Sans MS");
run.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
paragraph.AddElement(run);
slide.AddObject(shape);

```
