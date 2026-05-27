# SetTabs

Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph.
- **Warning**: The lengths of aPos array and aVal array - **MUST BE** equal to each other.

Inherited from [ApiParaPr.SetTabs](../../ApiParaPr/Methods/SetTabs.md).

## Example

Set custom tab stops for a paragraph in a document.

```javascript editor-docx
// How do I control where text jumps when pressing Tab in a document?

// Place text at precise horizontal positions using left, center, and right tab stops in a document.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetTabs([1440, 4320, 7200], ["left", "center", "right"]);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 1 inch left");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 3 inches center");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 5 inches right");
```
