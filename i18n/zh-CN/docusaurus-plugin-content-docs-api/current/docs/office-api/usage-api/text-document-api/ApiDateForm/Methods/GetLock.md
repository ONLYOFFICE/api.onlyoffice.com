# GetLock

返回当前表单的锁定状态。

继承自 [ApiFormBase.GetLock](../../ApiFormBase/Methods/GetLock.md)。

## 示例

检查当前表单是否被锁定。

```javascript editor-docx
// How to know whether a form is locked or not.

// Display a boolean representing whether a form is locked.

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
