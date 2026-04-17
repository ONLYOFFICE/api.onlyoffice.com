# SetSpacingAfter

Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then 
any value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it 
will be interpreted as false.

Inherited from [ApiParaPr.SetSpacingAfter](../../ApiParaPr/Methods/SetSpacingAfter.md).

## Example

This example sets the spacing after the current paragraph.

```javascript editor-docx
// How to set the size of a spacing after a text from a paragraph properties.

// Change the size property of a spacing after a paragraph.

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

