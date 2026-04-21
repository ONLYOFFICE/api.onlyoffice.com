# SetIndRight

Sets the paragraph right side indentation.

Inherited from [ApiParaPr.SetIndRight](../../ApiParaPr/Methods/SetIndRight.md).

## Example

Set the paragraph right side indentation in a document.

```javascript editor-docx
// How to set the indentation for the paragraph right side in a document.

// Create a new paragraph and set its right side indentation in a document.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetIndRight(2880);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph with the right offset of 2 inches set to it. ");
paragraph.AddText("This offset is set by the paragraph style. No paragraph inline style is applied. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the second paragraph with the right offset of 2 inches set to it. ");
paragraph.AddText("This offset is set by the paragraph style. No paragraph inline style is applied. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);
```
