# CreateMath

Creates a math equation from a linear text string. The resulting object can be inserted into a paragraph the same way as a run (e.g. via [ApiParagraph#AddElement](../../ApiParagraph/Methods/AddElement.md) or [ApiParagraph#Push](../../ApiParagraph/Methods/Push.md)).

## Syntax

```javascript
expression.CreateMath(text, format);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | An equation written as a linear text string. |
| format | Optional | "unicode" \| "latex" \| "mathml" | "unicode" | The format of the specified linear representation. |

## Returns

[ApiMath](../../ApiMath/ApiMath.md)

## Example

Build a math equation object and insert it into a shape's paragraph like a text run in a presentation.

```javascript editor-pptx
// Insert a formula into a shape as if it were a run of text in a presentation.

// Produce a reusable equation object and place it into a shape's paragraph content in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const paragraph = shape.GetDocContent().GetElement(0);
const math = Api.CreateMath("x^2 + y^2 = z^2", "unicode");
paragraph.AddElement(math);
```
