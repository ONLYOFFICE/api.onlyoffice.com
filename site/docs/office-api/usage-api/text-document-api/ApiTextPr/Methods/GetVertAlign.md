# GetVertAlign

Gets the vertical alignment type from the current text properties.

## Syntax

```javascript
expression.GetVertAlign();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to find out how a text is aligned vertically.

```javascript editor-docx
// How to know whether a text is subscript, superscript or baseline.

// Get the text properties of the run and find its vertical alignment.

let doc = Api.GetDocument();
let myNewRunStyle = doc.CreateStyle("My New Run Style", "run");
let textPr = myNewRunStyle.GetTextPr();
textPr.SetCaps(true);
textPr.SetFontFamily("Calibri Light");
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle);
run.AddText("This is a text run with its own style.");
textPr = run.GetTextPr();
textPr.SetVertAlign("subscript");
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let vertAlign = textPr.GetVertAlign();
paragraph.AddText("Vertical alignment type: " + vertAlign);
doc.Push(paragraph);
```
