# Search

Searches for the specified text within the current slide and returns all found occurrences as text ranges.

## Syntax

```javascript
expression.Search(text, isMatchCase, isWholeWords);
```

`expression` - A variable that represents an [ApiSlide](../ApiSlide.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string \| RegExp |  | The text to search for, or a regular expression to match. When a RegExp is passed, isMatchCase and isWholeWords are ignored (control case sensitivity with the "i" flag instead). |
| isMatchCase | Optional | boolean | false | Case sensitive or not. |
| isWholeWords | Optional | boolean | false | Whether to search for whole words only. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)[]

## Example

Find every occurrence of a word on a single slide and make the last match bold.

```javascript editor-pptx
// Search is scoped to this slide (including its notes) and returns each match as a text range.

// Add a shape with repeated text, search the slide for a keyword, and embolden the final result.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);
shape.GetTextRange().SetText("Sample text with a sample word and one more sample.");

const results = slide.Search("sample");
results[results.length - 1].SetBold(true);
```
