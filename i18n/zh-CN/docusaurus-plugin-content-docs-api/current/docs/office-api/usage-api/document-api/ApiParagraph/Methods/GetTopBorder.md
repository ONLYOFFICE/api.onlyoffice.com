# GetTopBorder

返回当前段落的顶部边框。

继承自 [ApiParaPr.GetTopBorder](../../ApiParaPr/Methods/GetTopBorder.md)。

## 示例

检索文档中段落的顶部边框设置。

```javascript editor-docx
// How do I read the top border type and size from a paragraph in a document?

// Confirm that a border was applied correctly by checking its properties after setting it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetTopBorder("single", 24, 0, 255, 111, 61);
paragraph.AddText("This is a paragraph with a top border.");
let border = paraPr.GetTopBorder();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Top border type: " + border.Type + ", size: " + border.Size);
doc.Push(paragraph2);
```
