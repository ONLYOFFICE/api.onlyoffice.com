# SetIndLeft

设置段落左侧缩进。

继承自 [ApiParaPr.SetIndLeft](../../ApiParaPr/Methods/SetIndLeft.md)。

## 示例

在文档中将段落从左边距向内推进。

```javascript editor-docx
// How do I set a left indent on paragraphs using a paragraph style in a document?

// Offset paragraph text from the left edge to create visual hierarchy or emphasize content.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetIndLeft(2880);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph with the indent of 2 inches set to it. ");
paragraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the second paragraph with the indent of 2 inches set to it. ");
paragraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);
```
