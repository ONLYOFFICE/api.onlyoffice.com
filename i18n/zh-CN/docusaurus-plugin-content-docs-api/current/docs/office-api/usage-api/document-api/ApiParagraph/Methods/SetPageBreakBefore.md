# SetPageBreakBefore

指定在使用分页视图呈现文档时，当前段落的内容呈现在文档新页的开头。

继承自 [ApiParaPr.SetPageBreakBefore](../../ApiParaPr/Methods/SetPageBreakBefore.md)。

## 示例

强制文档中的段落从新页面顶部开始。

```javascript editor-docx
// How do I insert a page break before a paragraph in a document?

// Push a section of text onto a fresh page so it always begins on its own page.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetPageBreakBefore(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a page break before a paragraph. ");
paragraph.AddText("The second paragraph will start from a new page, as it has a page break before it. ");
paragraph.AddText("Scroll down to the second page to see it. ");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it has page break before it enabled.");
paragraph.SetStyle(myStyle);
doc.Push(paragraph);
```
