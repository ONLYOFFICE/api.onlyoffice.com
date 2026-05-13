# SetStyle

The text style base method.
💡 This method is not used by itself, as it only forms the basis for the [ApiRun#SetStyle](../../ApiRun/Methods/SetStyle.md) method which sets
the selected or created style to the text.

Inherited from [ApiTextPr.SetStyle](../../ApiTextPr/Methods/SetStyle.md).

## Example

Set a style to run in a document.

```javascript editor-docx
// How to style a text in a document.

// Create a text run object, create a text style and apply it in a document.

let doc = Api.GetDocument();
let myNewRunStyle = doc.CreateStyle("My New Run Style", "run");
let textPr = myNewRunStyle.GetTextPr();
textPr.SetCaps(true);
textPr.SetFontFamily("Calibri Light");
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle);
run.AddText("This is a text run with its own style.");
paragraph.AddElement(run);
```
