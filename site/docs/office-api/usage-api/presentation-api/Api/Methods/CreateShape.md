# CreateShape

Creates a shape with the parameters specified.

## Syntax

```javascript
expression.CreateShape(sType, nWidth, nHeight, oFill, oStroke);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Optional | [ShapeType](../../Enumeration/ShapeType.md) | "rect" | The shape type which specifies the preset shape geometry. The "textRect" type creates a text box: it has no fill and no outline, uses the theme text color, and its height follows the text. |
| nWidth | Optional | [EMU](../../Enumeration/EMU.md) | 914400 | The shape width in English measure units. |
| nHeight | Optional | [EMU](../../Enumeration/EMU.md) | 914400 | The shape height in English measure units. |
| oFill | Optional | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the shape. If not specified, the default shape style fill (theme accent) is used, a text box has no fill. |
| oStroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to draw the shape outline. If not specified, the default shape style outline (theme accent) is used, a text box has no outline. |

## Returns

[ApiShape](../../ApiShape/ApiShape.md)

## Example

Add a flowchart shape with fill and stroke properties in a presentation.

```javascript editor-pptx
// How do I create a custom shape with colors in a presentation?

// Set up a shape with a fill color, outline, and add text to it in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
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
