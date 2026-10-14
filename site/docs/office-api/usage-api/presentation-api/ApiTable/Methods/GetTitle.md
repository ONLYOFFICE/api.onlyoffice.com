# GetTitle

Gets the title of the current drawing.

Inherited from [ApiDrawing.GetTitle](../../ApiDrawing/Methods/GetTitle.md).

## Syntax

```javascript
expression.GetTitle();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

Get the title of a drawing in a presentation.

```javascript editor-pptx
// Needed when reading the alternative text title of a drawing.

// Create a drawing, set its title, and read it back.

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
