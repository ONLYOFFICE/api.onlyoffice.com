# ToFixed

将当前表单转换为固定大小的表单。

继承自 [ApiFormBase.ToFixed](../../ApiFormBase/Methods/ToFixed.md)。

## 示例

在文档中将表单字段转换为固定大小的块。

```javascript editor-docx
// How do I set a specific width and height for a form field in a document?

// Lock a form's dimensions so layout does not shift when content changes.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(10 * 240, 2 * 240);
let fixed = textForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + fixed);
doc.Push(paragraph);
```
