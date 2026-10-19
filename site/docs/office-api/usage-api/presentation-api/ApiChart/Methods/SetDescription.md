# SetDescription

Sets the description of the current drawing.

Inherited from [ApiDrawing.SetDescription](../../ApiDrawing/Methods/SetDescription.md).

## Syntax

```javascript
expression.SetDescription(description);
```

`expression` - A variable that represents an [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| description | Required | string |  | The description to set for the current drawing. |

## Returns

boolean

## Example

Set the description of a drawing in a presentation.

```javascript editor-pptx
// Useful for assigning the alternative text of a drawing.

// Create a drawing and set its description.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
drawing.SetDescription("My Drawing Description");
let description = drawing.GetDescription();
let docContent = drawing.GetDocContent();
let paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Drawing description: " + description);
```
