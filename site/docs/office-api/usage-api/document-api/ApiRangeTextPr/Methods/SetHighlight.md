# SetHighlight

Specifies a highlighting color which is added to the text properties and applied as a background to the contents of the current run/range/paragraph.

Inherited from [ApiTextPr.SetHighlight](../../ApiTextPr/Methods/SetHighlight.md).

## Example

Apply a background highlight color to text in a document.

```javascript editor-docx
// How do I mark text with a colored background in a document?

// Draw attention to specific words by painting a highlight behind them in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetHighlight("lightGray");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text highlighted with light gray color using the text properties.");
```
