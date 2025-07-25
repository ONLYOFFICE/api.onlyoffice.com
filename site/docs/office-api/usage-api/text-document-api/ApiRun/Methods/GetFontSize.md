# GetFontSize

Gets the font size from the current text properties.

## Syntax

```javascript
expression.GetFontSize();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[hps](../../Enumeration/hps.md)

## Example

This example shows how to get the font size of the text.

```javascript editor-docx
// How to know the font size of the form.

// Retrieve text properties of the form to find out its font size.

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
textPr.SetFontSize(30);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let fontSize = textPr.GetFontSize();
paragraph.AddText("Font size: " + fontSize);
doc.Push(paragraph);
```
