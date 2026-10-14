# SetCaps

Specifies that any lowercase characters in the current text Range are formatted for display only as their capital letter character equivalents.

## Syntax

```javascript
expression.SetCaps(isCaps);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isCaps | Required | boolean \| null |  | Specifies if the Range contents are displayed capitalized or not. Pass *null* to remove the capitalization. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Apply all-caps formatting to all runs within a text range.

```javascript editor-pptx
// Useful for changing letter case display without altering the underlying text.

// Apply all caps formatting to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be displayed in all caps using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetCaps(true);
```
