# AddGuide

Adds a guide (formula) to the current geometry.

## Syntax

```javascript
expression.AddGuide(sName, sFormula, sX, sY, sZ);
```

`expression` - A variable that represents a [ApiGeometry](../ApiGeometry.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The guide name. |
| sFormula | Required | [GeometryFormulaType](../../Enumeration/GeometryFormulaType.md) |  | The formula type. |
| sX | Required | string |  | The X parameter. |
| sY | Required | string |  | The Y parameter. |
| sZ | Required | string |  | The Z parameter. |

## Returns

boolean

## Example

Creates adjustable geometry with guides and connection points for a presentation.

```javascript editor-pptx
// Displays adjustment value and applies custom geometry to shape.
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let customGeometry = Api.CreateCustomGeometry();
customGeometry.AddAdj("adj1", 25000);
customGeometry.SetAdjValue("adj1", 30000);
customGeometry.AddGuide("x1", "*/", "adj1", "w", "100000");
customGeometry.SetTextRect("x1", "0", "w", "h");
customGeometry.AddConnectionPoint("0", "hc", "0");
let path = customGeometry.AddPath();
path.SetStroke(true);
path.SetFill("norm");
path.MoveTo("l", "t");
path.LineTo("r", "t");
path.LineTo("r", "b");
path.LineTo("l", "b");
path.LineTo("x1", "hd2");
path.Close();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(50, 75, 100)));
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
shape.GetDocContent().GetElement(0).AddText("Adj value: " + customGeometry.GetAdjValue("adj1"));
shape.SetPosition(1500000, 1500000);
slide.AddObject(shape);
```
