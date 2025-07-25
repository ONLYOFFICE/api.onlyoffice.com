# SetJc

Sets the paragraph contents justification.

## Syntax

```javascript
expression.SetJc(sJc);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sJc | Required | "left" \| "right" \| "both" \| "center" |  | The justification type that will be applied to the paragraph contents. |

## Returns

boolean

## Example

This example sets the paragraph contents justification.

```javascript editor-docx
// How to set justification of the paragraph content.

// Change the justification of the paragraph.

let doc = Api.GetDocument();
let myStyleLeft = doc.CreateStyle("My style with left text alignment");
let paraPr = myStyleLeft.GetParaPr();
paraPr.SetJc("left");
let myStyleRight = doc.CreateStyle("My style with right text alignment");
paraPr = myStyleRight.GetParaPr();
paraPr.SetJc("right");
let myStyleCenter = doc.CreateStyle("My style with center text alignment");
paraPr = myStyleCenter.GetParaPr();
paraPr.SetJc("center");
let myStyleBoth = doc.CreateStyle("My style with justify text alignment");
paraPr = myStyleBoth.GetParaPr();
paraPr.SetJc("both");
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text in it aligned by the left side. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetStyle(myStyleLeft);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text in it aligned by the right side. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetStyle(myStyleRight);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetStyle(myStyleCenter);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text in it aligned by both sides (justified). ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetStyle(myStyleBoth);
doc.Push(paragraph);
```
