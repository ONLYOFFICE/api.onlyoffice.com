# SetJoinType

Sets the join type of the stroke.

## Syntax

```javascript
expression.SetJoinType(type);
```

`expression` - A variable that represents an [ApiStroke](../ApiStroke.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [LineJoinType](../../Enumeration/LineJoinType.md) |  | The join type of the stroke. |

## Returns

boolean

## Example

Set a bevel join for the corners of a shape border in a presentation.

```javascript editor-pptx
// Change the join type to control how the stroke corners are drawn.

// Create a rectangle, retrieve its stroke, apply the bevel join type, and display the result in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);
let retrievedStroke = shape.GetLine();
let result = retrievedStroke.SetJoinType("bevel");

let label = Api.CreateShape("rect", 120 * 36000, 30 * 36000, fill, Api.CreateStroke(0, Api.CreateNoFill()));
label.SetPosition(2000000, 3000000);
slide.AddObject(label);
label.GetDocContent().GetElement(0).AddText("Join type set: " + result);
```
