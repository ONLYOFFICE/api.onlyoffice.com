# GetFontFamily

Returns the font family from the current text properties.
The method automatically calculates the font from the theme if the font was set via the theme.

## Syntax

```javascript
expression.GetFontFamily();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the font family of the text.

```javascript editor-docx playground
// How to know the font name of the form.

// Retrieve text properties of the form to find out its font family.

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
textPr.SetFontFamily("Arial");
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let fontFamily = textPr.GetFontFamily();
paragraph.AddText("Font family: " + fontFamily);
doc.Push(paragraph);
```
