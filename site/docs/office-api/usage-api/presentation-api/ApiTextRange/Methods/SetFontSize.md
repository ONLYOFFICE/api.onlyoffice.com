# SetFontSize

Sets the font size of the characters in the current text Range.

## Syntax

```javascript
expression.SetFontSize(fontSize);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fontSize | Required | [hps](../../Enumeration/hps.md) \| null |  | The text size value measured in half-points (1/144 of an inch). Pass *null* to remove the font size. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Set the font size for all runs within a text range.

```javascript editor-pptx
// Useful for resizing text within a selection independently of the rest.

// Apply a 36 pt font size to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be displayed at 36 pt using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetFontSize(36);
```
