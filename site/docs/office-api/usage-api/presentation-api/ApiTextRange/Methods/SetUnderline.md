# SetUnderline

Specifies that the contents of the current Range are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line).

## Syntax

```javascript
expression.SetUnderline(isUnderline);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | Required | boolean \| null |  | Specifies if the contents of the current Range are displayed underlined or not. Pass *null* to remove the underline. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Apply underline formatting to all runs within a text range.

```javascript editor-pptx
// Useful for emphasizing a selection with an underline.

// Apply underline formatting to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be underlined using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetUnderline(true);
```
