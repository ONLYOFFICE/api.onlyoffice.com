# RemoveObject

Removes objects (image, shape or chart) from the current slide.

## Syntax

```javascript
expression.RemoveObject(nPos, nCount);
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | Position from which the object will be deleted. |
| nCount | Optional | number | 1 | The number of elements to delete. |

## Returns

boolean

## Example

Remove a specific object from a slide by its index.

```javascript editor-pptx
// Create multiple shapes on the slide.

// Delete one of them using the RemoveObject method.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
drawing.SetPosition(30 * 36000, 1267200);
drawing.SetSize(150 * 36000, 130 * 36000);

const copyDrawing = drawing.Copy();
copyDrawing.SetPosition(170 * 36000, 1267200);
copyDrawing.SetSize(150 * 36000, 130 * 36000);

slide.AddObject(drawing);
slide.AddObject(copyDrawing);
slide.RemoveObject(1, 1);
```
