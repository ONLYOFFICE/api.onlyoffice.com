# SetBorderColor

设置当前表单的边框颜色。

继承自 [ApiFormBase.SetBorderColor](../../ApiFormBase/Methods/SetBorderColor.md)。

## 示例

在文档中为表单字段应用边框颜色以突出显示。

```javascript editor-forms
// How do I change the border color of a form field in a document?

// Style the outline of a form field with a specific color to draw attention to it in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetBorderColor(Api.HexColor('#FF6F3D'));
```
