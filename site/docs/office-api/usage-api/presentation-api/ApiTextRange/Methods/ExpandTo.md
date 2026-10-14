# ExpandTo

Returns a new range that spans both this range and the given range. The current range is not changed.

## Syntax

```javascript
expression.ExpandTo(range);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| range | Required | [ApiTextRange](../../ApiTextRange/ApiTextRange.md) |  | No description provided. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Expand two overlapping or adjacent text ranges into a single union range.

```javascript editor-pptx
// Useful for merging adjacent or overlapping selections into one range.

// Create two sub-ranges and expand them into one union range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Hello World");
slide.AddObject(shape);

const range = shape.GetTextRange();
const range1 = range.GetRange(0, 5);
const range2 = range.GetRange(6, 11);

const union = range1.ExpandTo(range2);
union.Select()
```
