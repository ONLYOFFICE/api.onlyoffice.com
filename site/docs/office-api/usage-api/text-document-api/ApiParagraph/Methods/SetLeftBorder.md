# SetLeftBorder

Specifies the border which will be displayed at the left side of the page around the specified paragraph.

Inherited from [ApiParaPr.SetLeftBorder](../../ApiParaPr/Methods/SetLeftBorder.md).

## Example

Specify the border which will be displayed at the left side of the page around the specified paragraph.

```javascript editor-docx
// How to add border to the left side of the paragraph in a document.

// Set left border for a paragraph properties in a document.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetLeftBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border at its left side.");
```
