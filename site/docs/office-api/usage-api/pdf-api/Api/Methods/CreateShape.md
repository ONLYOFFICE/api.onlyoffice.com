# CreateShape

Creates a shape with the parameters specified.

## Syntax

```javascript
expression.CreateShape(shapeType, width, height, fill, stroke);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shapeType | Optional | [ShapeType](../../Enumeration/ShapeType.md) | "rect" | The shape type which specifies the preset shape geometry. |
| width | Optional | [EMU](../../Enumeration/EMU.md) | 72 | The shape width in English measure units. |
| height | Optional | [EMU](../../Enumeration/EMU.md) | 72 | The shape height in English measure units. |
| fill | Optional | [ApiFill](../../ApiFill/ApiFill.md) | Api.CreateNoFill() | The color or pattern used to fill the shape. |
| stroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) | Api.CreateStroke(0, Api.CreateNoFill()) | The stroke used to create the element shadow. |

## Returns

[ApiShape](../../ApiShape/ApiShape.md)

## Example

Insert a flowchart shape with text and colors in a PDF.

```javascript editor-pdf
// How do I add a shape and populate it with text in a PDF?

// Create a shape with colored background and multiple text runs in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
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
