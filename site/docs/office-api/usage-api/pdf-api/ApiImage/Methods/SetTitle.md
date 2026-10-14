# SetTitle

Sets the title of the current drawing.

Inherited from [ApiDrawing.SetTitle](../../ApiDrawing/Methods/SetTitle.md).

## Syntax

```javascript
expression.SetTitle(title);
```

`expression` - A variable that represents an [ApiImage](../ApiImage.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| title | Required | string |  | The title to set for the current drawing. |

## Returns

boolean

## Example

Set the alternative-text title of a drawing in a PDF form.

```javascript editor-pdf
// Assign an accessibility title used by assistive tools for the shape.

// Create a shape, set its title, and display the title inside it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetTitle("My Drawing Title");
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing title: " + shape.GetTitle());
```
