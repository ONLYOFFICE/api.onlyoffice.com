# SetBottomBorder

Specifies the border which will be displayed below a set of paragraphs which have the same paragraph border settings.
💡 The paragraphs of the same style going one by one are considered as a single block, so the border is added
to the whole block rather than to every paragraph in this block.

Inherited from [ApiParaPr.SetBottomBorder](../../ApiParaPr/Methods/SetBottomBorder.md).

## Example

This example specifies the border which will be displayed below a set of paragraphs which have the same paragraph border settings.

```javascript editor-docx
// Add the bottom border to the paragraph.

// Get the first paragraph and set its border.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetBottomBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border below it.");
```

