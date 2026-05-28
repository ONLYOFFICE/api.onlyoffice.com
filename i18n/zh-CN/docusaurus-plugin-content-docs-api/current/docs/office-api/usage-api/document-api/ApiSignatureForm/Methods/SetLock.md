# SetLock

设置当前表单的锁定状态。

继承自 [ApiFormBase.SetLock](../../ApiFormBase/Methods/SetLock.md)。

## 示例

锁定文档中的表单字段以防止编辑。

```javascript editor-docx
// How do I lock a form field so it cannot be changed in a document?

// Protect specific fields from modification while keeping others editable.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetLock(true);
let locked = textForm.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is locked: " + locked);
doc.Push(paragraph);
```
