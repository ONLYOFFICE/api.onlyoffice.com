# ToInline

将当前表单转换为内联表单。
*图片表单无法转换为内联表单，它始终是固定大小的对象。*

继承自 [ApiFormBase.ToInline](../../ApiFormBase/Methods/ToInline.md)。

## 示例

在文档中将固定大小的表单字段转换回内联表单。

```javascript editor-forms
// How do I switch a form field from fixed size to inline positioning in a document?

// Allow a form field to flow with surrounding text instead of occupying a fixed block.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(10 * 240, 2 * 240);
let copyForm = textForm.Copy();
paragraph = Api.CreateParagraph();
paragraph.AddElement(copyForm);
doc.Push(paragraph);
copyForm.ToInline();
let fixed = textForm.IsFixed();
let fixedCopy = copyForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + fixed);
paragraph.AddLineBreak();
paragraph.AddText("The second form from this document has a fixed size: " + fixedCopy);
doc.Push(paragraph);
```
