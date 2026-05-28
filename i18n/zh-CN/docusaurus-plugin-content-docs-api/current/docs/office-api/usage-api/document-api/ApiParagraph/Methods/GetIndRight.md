# GetIndRight

返回段落右侧缩进。

继承自 [ApiParaPr.GetIndRight](../../ApiParaPr/Methods/GetIndRight.md)。

## 示例

读取文档中段落设置的右缩进值。

```javascript editor-docx
// How do I find out how far a paragraph is indented from the right margin in a document?

// Check the right indent size before synchronizing paragraph layout across multiple styles.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetJc("right");
paraPr.SetIndRight(2880);
paragraph.AddText("This is the first paragraph with the right offset of 2 inches set to it. ");
paragraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
let indRight = paraPr.GetIndRight();
paragraph = Api.CreateParagraph();
paragraph.AddText("Right indent: " + indRight);
doc.Push(paragraph);
```
