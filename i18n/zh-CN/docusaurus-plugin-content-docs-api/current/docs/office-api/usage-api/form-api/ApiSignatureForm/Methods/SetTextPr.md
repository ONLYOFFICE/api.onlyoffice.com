# SetTextPr

设置当前表单的文本属性。
*如果该表单类型支持则使用*

继承自 [ApiFormBase.SetTextPr](../../ApiFormBase/Methods/SetTextPr.md)。

## 示例

在文档中为表单字段应用自定义文本格式。

```javascript editor-forms
// How do I change the font size and style of text inside a form field in a document?

// Make form field text bold and larger to improve readability.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textForm.SetTextPr(textPr);
```
