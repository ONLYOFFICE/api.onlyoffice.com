# SetCaps

Specifies that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents.

Inherited from [ApiTextPr.SetCaps](../../ApiTextPr/Methods/SetCaps.md).

## Example

Display all lowercase letters as capitals without changing the underlying text in a document.

```javascript editor-docx
// How do I make text appear in all capital letters without retyping it in a document?

// Apply a visual-only capitals effect to the default text so readers see uppercase letters in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetCaps(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text set to capital letters using the text properties.");
```
