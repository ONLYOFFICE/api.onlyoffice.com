# SetLine

Sets the outline properties to the current graphic object.

Inherited from [ApiDrawing.SetLine](../../ApiDrawing/Methods/SetLine.md).

## Syntax

```javascript
expression.SetLine(stroke);
```

`expression` - A variable that represents an [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| stroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the graphic object outline. |

## Returns

boolean

## Example

Set the outline of a drawing object through the base ApiDrawing interface in a spreadsheet.

```javascript editor-xlsx
// SetLine is the base method for the outline and works for any drawing object added to a worksheet, not only shapes.

// Add a shape to a worksheet and give it a dark solid outline.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const noStroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = worksheet.AddShape("rect", 90 * 36000, 27 * 36000, fill, noStroke, 0, 2 * 36000, 0, 3 * 36000);
const outline = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
drawing.SetLine(outline);
```
