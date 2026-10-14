# SetVertAlign

Specifies the alignment which will be applied to the Range contents in relation to the default appearance of the Range text: **"baseline"** - the characters in the current text Range will be aligned by the default text baseline. **"subscript"** - the characters in the current text Range will be aligned below the default text baseline. **"superscript"** - the characters in the current text Range will be aligned above the default text baseline.

## Syntax

```javascript
expression.SetVertAlign(type);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | "baseline" \| "subscript" \| "superscript" \| null |  | The vertical alignment type applied to the text contents. Pass *null* to remove the vertical alignment. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Set the vertical alignment of runs within a text range to superscript.

```javascript editor-pptx
// Useful for creating superscript or subscript effects on part of text.

// Apply superscript vertical alignment to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("E=mc");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.AddText("2", "after");

shape.GetTextRange().GetRange(4, 5).SetVertAlign("superscript");
```
