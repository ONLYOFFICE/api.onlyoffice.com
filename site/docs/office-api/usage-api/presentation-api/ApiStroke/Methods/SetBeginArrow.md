# SetBeginArrow

Sets the beginning arrow of the stroke.

## Syntax

```javascript
expression.SetBeginArrow(type, width, length);
```

`expression` - A variable that represents an [ApiStroke](../ApiStroke.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [LineEndType](../../Enumeration/LineEndType.md) |  | The type of the beginning arrow. |
| width | Optional | [LineEndSize](../../Enumeration/LineEndSize.md) | "medium" | The width of the beginning arrow. |
| length | Optional | [LineEndSize](../../Enumeration/LineEndSize.md) | "medium" | The length of the beginning arrow. |

## Returns

boolean

## Example

Add an arrowhead to the start of a line in a presentation.

```javascript editor-pptx
// How do I set the beginning arrow of a line's stroke in a presentation?

// Create a line, retrieve its stroke, apply a triangle arrow to the start, and label the result in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let line = Api.CreateShape("line", 100 * 36000, 50 * 36000, fill, stroke);
line.SetPosition(2000000, 1000000);
slide.AddObject(line);
let retrievedStroke = line.GetLine();
let result = retrievedStroke.SetBeginArrow("triangle", "medium", "large");

let label = Api.CreateShape("rect", 120 * 36000, 30 * 36000, fill, Api.CreateStroke(0, Api.CreateNoFill()));
label.SetPosition(2000000, 3000000);
slide.AddObject(label);
label.GetDocContent().GetElement(0).AddText("Begin arrow set: " + result);
```
