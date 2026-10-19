# CreateShape

Creates a shape with the parameters specified.

## Syntax

```javascript
expression.CreateShape(shapeType, width, height, fill, stroke);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shapeType | Optional | [ShapeType](../../Enumeration/ShapeType.md) | "rect" | The shape type which specifies the preset shape geometry. The "textRect" type creates a text box: it has no fill and no outline, and its height follows the text. |
| width | Optional | [EMU](../../Enumeration/EMU.md) | 914400 | The shape width in English measure units. |
| height | Optional | [EMU](../../Enumeration/EMU.md) | 914400 | The shape height in English measure units. |
| fill | Optional | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the shape. If not specified, the default shape style fill (theme accent) is used, a text box has no fill. |
| stroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to draw the shape outline. If not specified, the default shape style outline (theme accent) is used, a text box has no outline. |

## Returns

[ApiShape](../../ApiShape/ApiShape.md)

## Example

Insert a flowchart shape with text and colors in a PDF.

```javascript editor-pdf
// How do I add a shape and populate it with text in a PDF?

// Create a shape with colored background and multiple text runs in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
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
page.AddObject(shape);
```
