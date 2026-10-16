# SetBold

Sets bold formatting for the contents of the current text range.

## Syntax

```javascript
expression.SetBold(isBold);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | Required | boolean \| null |  | Pass *null* to remove the bold formatting. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Set the bold property on all runs within a text range.

```javascript editor-pptx
// Useful for emphasizing a portion of text without affecting the rest.

// Apply bold formatting to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be made bold using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetBold(true);
```
