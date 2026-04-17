# SetPageBreakBefore

指定在使用分页视图呈现文档时，当前段落的内容呈现在文档新页的开头。

Inherited from [ApiParaPr.SetPageBreakBefore](../../ApiParaPr/Methods/SetPageBreakBefore.md).

## 示例

此示例指定在使用分页视图呈现文档时，当前段落的内容呈现在文档新页的开头。

```javascript editor-docx
// How to set a page break before the current paragraph.

// Move the paragraph to the new page while rendering.

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

