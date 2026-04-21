# Clear

清除当前表单。

继承自 [ApiFormBase.Clear](../../ApiFormBase/Methods/Clear.md)。

## 示例

清除当前表单。

```javascript editor-docx
// How to remove texy from the form.

// Clear answer from the text form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetText("John Smith");
textForm.Clear();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document was cleared.");
doc.Push(paragraph);
```
