# SetSmallCaps

Specifies that all the small letter characters in the text run are formatted for display only as their capital
letter character equivalents which are two points smaller than the actual font size specified for this text.

Inherited from [ApiTextPr.SetSmallCaps](../../ApiTextPr/Methods/SetSmallCaps.md).

## Example

Display lowercase letters as smaller capital letters in a document.

```javascript editor-docx
// How do I make text appear in small capitals without retyping it in a document?

// Give text a refined look by rendering all letters as reduced-size capitals in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetSmallCaps(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font set to small capitalized letters.");
```
