# RemoveObject

Removes objects (image, shape or chart) from the current slide layout.

## Syntax

```javascript
expression.RemoveObject(nPos, nCount);
```

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | Position from which the object will be deleted. |
| nCount | Optional | number | 1 | The number of elements to delete. |

## Returns

boolean

## Example

This example shows how to remove objects from a slide layout.

```javascript editor-pptx playground
// How to remove objects from a layout using their index position.

// Delete an element from the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
drawing.SetPosition(30 * 36000, 1267200);
drawing.SetSize(150 * 36000, 130 * 36000);

const copyDrawing = drawing.Copy();
copyDrawing.SetPosition(160 * 36000, 1267200);
copyDrawing.SetSize(150 * 36000, 130 * 36000);

layout.AddObject(drawing);
layout.AddObject(copyDrawing);
layout.RemoveObject(1, 1);

const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("The second cube was removed from this layout.");

```
