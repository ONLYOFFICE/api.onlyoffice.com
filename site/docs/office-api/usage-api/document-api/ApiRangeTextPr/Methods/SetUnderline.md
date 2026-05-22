# SetUnderline

Specifies that the contents of the run are displayed along with a line appearing directly below the character
(less than all the spacing above and below the characters on the line).

Inherited from [ApiTextPr.SetUnderline](../../ApiTextPr/Methods/SetUnderline.md).

## Example

Underline all default text with a single line in a document.

```javascript editor-docx
// How do I add an underline beneath the default paragraph text in a document?

// Emphasize body text by switching on the underline formatting option in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetUnderline(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text underlined with a single line.");
```
