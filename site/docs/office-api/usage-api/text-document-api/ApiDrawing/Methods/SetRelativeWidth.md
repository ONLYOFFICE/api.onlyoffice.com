# SetRelativeWidth

Sets the relative width of the object (image, shape, chart) bounding box.

## Syntax

```javascript
expression.SetRelativeWidth(sRelativeFrom, nPercent);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRelativeFrom | Optional | [RelFromV](../../Enumeration/RelFromV.md) | "page" | The document element which will be taken as a countdown point for the object width. |
| nPercent | Required | [percentage](../../Enumeration/percentage.md) |  | No description provided. |

## Returns

boolean

## Example

This example demonstrates relative width shape sizing to page dimensions.

```javascript editor-docx
// How to set shape width and height as percentages of the page.

// Create a responsive rectangle that scales with page size.
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
