# Find

Finds the first occurrence of the given text within this range and returns it as a new ApiTextRange. Returns null if the text is not found.

## Syntax

```javascript
expression.Find(findWhat, after, matchCase, wholeWords);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| findWhat | Required | string |  | Text to search for. |
| after | Optional | number | 1 | 1-based position within this range to start searching from. |
| matchCase | Optional | boolean | false | Case-sensitive search. |
| wholeWords | Optional | boolean | false | Match whole words only. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Search for a word within a text range and return its sub-range.

```javascript editor-pptx
// Useful for locating a substring and acting on its exact position.

// Find the word "World" in the shape text and display its start position.

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
const found = range.Find("World");

const fill2 = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const shape2 = Api.CreateShape("rect", 300 * 36000, 80 * 36000, fill2, stroke);
shape2.SetPosition(608400, 6000000);
const msg = "Found at pos " + found.GetStartPos() + ": " + found.GetText();
shape2.GetDocContent().GetElement(0).AddText(msg);
slide.AddObject(shape2);
```
