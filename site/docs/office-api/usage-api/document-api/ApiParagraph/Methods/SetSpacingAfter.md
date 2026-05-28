# SetSpacingAfter

Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then 
any value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it 
will be interpreted as false.

Inherited from [ApiParaPr.SetSpacingAfter](../../ApiParaPr/Methods/SetSpacingAfter.md).

## Example

Add extra space below a paragraph to separate it from the content that follows in a document.

```javascript editor-docx
// How do I control the amount of space after a paragraph in a document?

// Push the next paragraph further down the page by increasing the gap below the current one.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetSpacingAfter(1440);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a space after a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the first paragraph has this offset enabled.");
paragraph.SetStyle(myStyle);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
doc.Push(paragraph);
```
