# GetLock

返回当前表单的锁定状态。

继承自 [ApiFormBase.GetLock](../../ApiFormBase/Methods/GetLock.md)。

## 示例

检查文档中表单字段的锁定状态。

```javascript editor-docx
// How do I find out whether a form field is locked in a document?

// Protect a form, then confirm the lock is active by reading the lock state.

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
