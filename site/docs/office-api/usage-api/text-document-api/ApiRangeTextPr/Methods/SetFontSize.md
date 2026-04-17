# SetFontSize

Sets the font size to the characters of the current text run.

Inherited from [ApiTextPr.SetFontSize](../../ApiTextPr/Methods/SetFontSize.md).

## Example

This example sets the font size to the characters of the current text run.

```javascript editor-docx
// How to change the text font size.

// Create a text run object, resize its font.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontSize(30);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font size set to 15 points using the text properties.");
```

