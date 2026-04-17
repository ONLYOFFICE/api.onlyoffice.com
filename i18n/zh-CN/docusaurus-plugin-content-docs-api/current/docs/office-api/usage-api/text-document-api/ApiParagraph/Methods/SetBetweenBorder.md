# SetBetweenBorder

指定在具有相同段落边框设置的一组段落中每个段落之间显示的边框。

Inherited from [ApiParaPr.SetBetweenBorder](../../ApiParaPr/Methods/SetBetweenBorder.md).

## 示例

此示例指定在具有相同段落边框设置的一组段落中每个段落之间显示的边框。

```javascript editor-docx
// How to set the border between paragraphs.

// Create a paragraph, add text to it and the single border between the text.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetBetweenBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border between paragraphs.");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the second paragraph. ");
paragraph.AddText("No need to add anything additionally to it. ");
paragraph.AddText("The borders between the paragraphs have already been set.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the third paragraph. ");
paragraph.AddText("No need to add anything additionally to it. ");
paragraph.AddText("The borders between the paragraphs have already been set.");
doc.Push(paragraph);
```

