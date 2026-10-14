# SetSmallCaps

Specifies that all the lowercase letter characters in the current text Range are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.

## Syntax

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | Required | boolean \| null |  | Specifies if the contents of the current Range are displayed capitalized two points smaller or not. Pass *null* to remove the small capitals. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Apply small caps formatting to all runs within a text range.

```javascript editor-pptx
// Useful for a stylistic case change without retyping the text.

// Apply small caps formatting to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be displayed in small caps using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetSmallCaps(true);
```
