# SetTitle

Sets the title of the current drawing.

Inherited from [ApiDrawing.SetTitle](../../ApiDrawing/Methods/SetTitle.md).

## Syntax

```javascript
expression.SetTitle(title);
```

`expression` - A variable that represents an [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| title | Required | string |  | The title to set for the current drawing. |

## Returns

boolean

## Example

Set the title of a drawing in a document.

```javascript editor-docx
// Useful for assigning the alternative text title of a drawing.

// Create a drawing and set its title.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetTitle("My Drawing Title");
let title = drawing.GetTitle();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing title: " + title);
doc.AddElement(0, paragraph);
```
