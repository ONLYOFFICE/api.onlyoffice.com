# AddText

Adds a text to the specified position. The current range is expanded to include the added text.

## Syntax

```javascript
expression.AddText(text, position);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | String |  | The text that will be added. |
| position | Optional | "after" \| "before" | "after" | The position where the text will be added ("before" or "after" the range specified). |

## Returns

boolean

## Example

Add text to a text range in a shape on a worksheet.

```javascript editor-xlsx
// The range grows to include the added text.

// Append a word after the range.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello");

let range = shape.GetTextRange();

range.AddText(" World", "after");

worksheet.GetRange("A1").SetValue("AddText: " + shape.GetTextRange().GetText());
```
