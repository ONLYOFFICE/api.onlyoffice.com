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

Replace every occurrence of a word inside a text range in a shape on a worksheet.

```javascript editor-xlsx
// The replacement keeps the formatting of the text it replaces.

// Replace every occurrence of "foo" with "bar".

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("foo bar foo");

let range = shape.GetTextRange();

range.Replace("foo", "bar");

worksheet.GetRange("A1").SetValue("Replace: " + shape.GetTextRange().GetText());
```
