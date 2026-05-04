# SetTopBorder

Specifies the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings.
💡 The paragraphs of the same style going one by one are considered as a single block, so the border is added to the whole block rather than to every paragraph in this block.

Inherited from [ApiParaPr.SetTopBorder](../../ApiParaPr/Methods/SetTopBorder.md).

## Example

Specify the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings in a document.

```javascript editor-docx
// Set top border to the paragraph in a document.

// Border with single line the text in a document.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetTopBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border above it.");
```
