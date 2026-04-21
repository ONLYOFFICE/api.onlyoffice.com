# GetIndLeft

返回段落左侧缩进。

继承自 [ApiParaPr.GetIndLeft](../../ApiParaPr/Methods/GetIndLeft.md)。

## 示例

获取文档中的段落左侧缩进。

```javascript editor-docx
// Get the left indentation of the paragraph and show it in the document.

// How to know the number of inches of the left indentation in a document.

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
