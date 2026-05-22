# SetDoubleStrikeout

Specifies that the contents of the run are displayed with two horizontal lines through each character displayed on the line.

Inherited from [ApiTextPr.SetDoubleStrikeout](../../ApiTextPr/Methods/SetDoubleStrikeout.md).

## Example

Draw two horizontal lines through the default text characters in a document.

```javascript editor-docx
// How do I cross out text with a double strikethrough in a document?

// Mark the default font with a double strikeout to visually indicate deleted or superseded content in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetDoubleStrikeout(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text struck out with two lines using the text properties.");
```
