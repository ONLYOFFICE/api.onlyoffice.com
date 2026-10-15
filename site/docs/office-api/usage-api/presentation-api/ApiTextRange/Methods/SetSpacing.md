# SetSpacing

Sets the text spacing measured in twentieths of a point.

## Syntax

```javascript
expression.SetSpacing(spacing);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| spacing | Required | [twips](../../Enumeration/twips.md) \| null |  | The value of the text spacing measured in twentieths of a point (1/1440 of an inch). Pass *null* to remove the text spacing. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Set the character spacing for all runs within a text range.

```javascript editor-pptx
// Useful for tightening or loosening letter spacing in a selection.

// Apply 80 twentieths-of-a-point spacing to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text has increased character spacing.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetSpacing(80);
```
