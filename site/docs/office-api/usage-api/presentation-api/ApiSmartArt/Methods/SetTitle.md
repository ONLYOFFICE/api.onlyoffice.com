# SetTitle

Sets the title of the current drawing.

Inherited from [ApiDrawing.SetTitle](../../ApiDrawing/Methods/SetTitle.md).

## Syntax

```javascript
expression.SetTitle(title);
```

`expression` - A variable that represents an [ApiSmartArt](../ApiSmartArt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| title | Required | string |  | The title to set for the current drawing. |

## Returns

boolean

## Example

Set the title of a drawing in a presentation.

```javascript editor-pptx
// Useful for assigning the alternative text title of a drawing.

// Create a drawing and set its title.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
drawing.SetTitle("My Drawing Title");
let title = drawing.GetTitle();
let docContent = drawing.GetDocContent();
let paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Drawing title: " + title);
```
