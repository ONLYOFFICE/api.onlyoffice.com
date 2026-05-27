# SetRelativeWidth

Sets the relative width of the object (image, shape, chart) bounding box.

## Syntax

```javascript
expression.SetRelativeWidth(relativeFrom, percent);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| relativeFrom | Optional | [SizeRelFromH](../../Enumeration/SizeRelFromH.md) | "page" | The document element which will be taken as a countdown point for the object width. |
| percent | Required | [percentage](../../Enumeration/percentage.md) |  | The width of the object as a percentage of the specified element. |

## Returns

boolean

## Example

Size a shape's width as a percentage of the page in a document.

```javascript editor-docx
// How do I make a shape's width span a fixed fraction of the page in a document?

// Stretch a rectangle to half the page width so its layout stays consistent across page sizes in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 250, 0));
let stroke = Api.CreateStroke(0.4 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(65, 113, 156)));
let drawing = Api.CreateShape("rect", 1 * 36000, 1 * 36000, fill, stroke);
drawing.SetWrappingStyle("inFront");
drawing.SetVerPosition("page", 50 * 36000);
drawing.SetHorPosition("page", 0 * 3600);
drawing.SetRelativeWidth("page", 50);
drawing.SetRelativeHeight("page", 25);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape was created with a width 50% of page width and 25% of height page");
doc.Push(paragraph);
```
