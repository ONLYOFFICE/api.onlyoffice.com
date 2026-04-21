# SetStyle

The paragraph style base method.
💡 This method is not used by itself, as it only forms the basis for the [ApiParagraph#SetStyle](../../ApiParagraph/Methods/SetStyle.md) method which sets the selected or created style for the paragraph.

Inherited from [ApiParaPr.SetStyle](../../ApiParaPr/Methods/SetStyle.md).

## Example

Set a style for the paragraph in a document.

```javascript editor-docx
// Set the style of the paragraph to "Heading 6" in a document.

// Create a text in a paragraph styled with the 'Heading 6' style in a document.

let doc = Api.GetDocument();
let heading6Style = doc.GetStyle("Heading 6");
let paraPr = heading6Style.GetParaPr();
paraPr.SetJc("center");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(heading6Style);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
```
