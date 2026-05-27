# GetIndLeft

返回段落左侧缩进。

继承自 [ApiParaPr.GetIndLeft](../../ApiParaPr/Methods/GetIndLeft.md)。

## 示例

读取文档中段落设置的左缩进值。

```javascript editor-docx
// How do I find out how far a paragraph is indented from the left margin in a document?

// Check the left indent size before synchronizing paragraph layout across multiple styles.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetIndLeft(2880);
paragraph.AddText("This is the first paragraph with the indent of 2 inches set to it. ");
paragraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
let indLeft = paraPr.GetIndLeft();
paragraph = Api.CreateParagraph();
paragraph.AddText("Left indent: " + indLeft);
doc.Push(paragraph);
```
