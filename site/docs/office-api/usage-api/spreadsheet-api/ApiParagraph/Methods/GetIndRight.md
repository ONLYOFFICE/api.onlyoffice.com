# GetIndRight

Returns the paragraph right side indentation.

Inherited from [ApiParaPr.GetIndRight](../../ApiParaPr/Methods/GetIndRight.md).

## Syntax

```javascript
expression.GetIndRight();
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md) \| undefined

## Example

Read the right indent value applied to a paragraph in a spreadsheet.

```javascript editor-xlsx
// How do I check how much space is added to the right side of a paragraph in a spreadsheet?

// Set a right indent on a paragraph and then retrieve the stored measurement in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("This is a paragraph with the right offset of 2 inches set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.SetJc("right");
paragraph.SetIndRight(2880);
let indRight = paragraph.GetIndRight();
paragraph = Api.CreateParagraph();
paragraph.AddText("Right indent: " + indRight);
content.Push(paragraph);
```
