# SetStrikeout

Specifies that the contents of the run are displayed with a single horizontal line through the center of the line.

Inherited from [ApiTextPr.SetStrikeout](../../ApiTextPr/Methods/SetStrikeout.md).

## Example

Apply a strikethrough line to text in a document.

```javascript editor-docx
// How do I draw a horizontal line through the middle of text in a document?

// Mark text as deleted or deprecated by crossing it out in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetStrikeout(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text struck out with a single line.");
```
