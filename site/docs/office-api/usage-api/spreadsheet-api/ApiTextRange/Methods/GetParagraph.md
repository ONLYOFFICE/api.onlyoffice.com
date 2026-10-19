# GetParagraph

Returns the paragraph at the given index within this range. Returns null if the index is out of bounds.

## Syntax

```javascript
expression.GetParagraph(index);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | Required | number |  | No description provided. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## Example

Take one paragraph covered by a text range in a shape on a worksheet.

```javascript editor-xlsx
// A range may span several paragraphs, which are addressed by index.

// Append text to the second paragraph of the range and make it bold.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
docContent.GetElement(0).AddText("First paragraph");
let secondPara = Api.CreateParagraph();
secondPara.AddText("Second paragraph");
docContent.Push(secondPara);
let thirdPara = Api.CreateParagraph();
thirdPara.AddText("Third paragraph");
docContent.Push(thirdPara);

let range = shape.GetTextRange();

let secondParagraph = range.GetParagraph(1);
secondParagraph.AddText(" (edited)");
secondParagraph.SetBold(true);
```
