# SetDescription

Sets the description of the current drawing.

Inherited from [ApiDrawing.SetDescription](../../ApiDrawing/Methods/SetDescription.md).

## Syntax

```javascript
expression.SetDescription(description);
```

`expression` - A variable that represents an [ApiImage](../ApiImage.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| description | Required | string |  | The description to set for the current drawing. |

## Returns

boolean

## Example

Set the alternative-text description of a drawing in a PDF form.

```javascript editor-pdf
// Assign an accessibility description used by assistive tools for the shape.

// Create a shape, set its description, and display the description inside it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetDescription("My Drawing Description");
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing description: " + shape.GetDescription());
```
