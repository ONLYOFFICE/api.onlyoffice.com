# SetLockAspect

Sets whether the aspect ratio of the drawing is locked.

Inherited from [ApiDrawing.SetLockAspect](../../ApiDrawing/Methods/SetLockAspect.md).

## Syntax

```javascript
expression.SetLockAspect(bAspect);
```

`expression` - A variable that represents an [ApiImage](../ApiImage.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bAspect | Required | boolean |  | Specifies whether the aspect ratio of this drawing is locked. |

## Returns

boolean

## Example

Lock the aspect ratio of a shape on a page in a PDF form.

```javascript editor-pdf
// Keep width and height proportional so resizing preserves the shape's proportions.

// Create a shape, lock its aspect ratio, and display the applied lock state.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetLockAspect(true);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Aspect ratio locked: " + shape.GetLockAspect());
```
