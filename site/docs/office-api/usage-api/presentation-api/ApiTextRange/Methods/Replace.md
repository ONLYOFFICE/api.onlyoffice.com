# Replace

Replaces all occurrences of the specified text within this range.

## Syntax

```javascript
expression.Replace(findWhat, replaceWith, matchCase, wholeWords);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| findWhat | Required | string |  | Text to search for. |
| replaceWith | Required | string |  | Replacement text. |
| matchCase | Optional | boolean | false | Case-sensitive search. |
| wholeWords | Optional | boolean | false | Match whole words only. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Replace all occurrences of a word within a text range.

```javascript editor-pptx
// Useful for bulk text substitution inside a shape.

// Replace every occurrence of "foo" with "bar".

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("foo bar foo");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.Replace("foo", "bar");
```
