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

Find a word inside a text range in a shape on a worksheet.

```javascript editor-xlsx
// The result is a range that covers exactly the match.

// Paint the match red and report where it starts.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("alpha TARGET omega");

let range = shape.GetTextRange();

let found = range.Find("TARGET");
found.SetColor(Api.RGB(255, 0, 0));

worksheet.GetRange("A1").SetValue("Find: " + found.GetStartPos());
```
