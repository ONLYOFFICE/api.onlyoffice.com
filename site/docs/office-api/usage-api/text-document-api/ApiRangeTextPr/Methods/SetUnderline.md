# SetUnderline

Specifies that the contents of the run are displayed along with a line appearing directly below the character
(less than all the spacing above and below the characters on the line).

Inherited from [ApiTextPr.SetUnderline](../../ApiTextPr/Methods/SetUnderline.md).

## Example

This example specifies that the contents of the current run are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line).

```javascript editor-docx
// How to underline a text object.

// Create a text run object, underline it with a single line.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetUnderline(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text underlined with a single line.");
```

