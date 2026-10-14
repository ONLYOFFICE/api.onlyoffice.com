# GetRange

Returns a new ApiTextRange that represents a sub-range of the current range.

## Syntax

```javascript
expression.GetRange(start, rangeEnd);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | Optional | number | 0 | Start offset (0-based) relative to the beginning of this range. |
| rangeEnd | Optional | number | -1 | End offset relative to the beginning of this range. -1 means the end of this range. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Create a sub-range from an existing text range using relative offsets.

```javascript editor-pptx
// Useful for narrowing a range down to a smaller portion of text.

// Get the sub-range "World" from "Hello World" and select it.

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
const sub = range.GetRange(6, 11);
sub.SetBold(true);
```
