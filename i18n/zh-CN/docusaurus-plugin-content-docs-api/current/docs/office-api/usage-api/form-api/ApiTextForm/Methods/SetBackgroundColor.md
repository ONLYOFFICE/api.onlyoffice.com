# SetBackgroundColor

设置当前表单的背景颜色。

继承自 [ApiFormBase.SetBackgroundColor](../../ApiFormBase/Methods/SetBackgroundColor.md)。

## 示例

为表单设置背景颜色。

```javascript editor-forms
// Apply an RGB background color to the text form element.

// How to change background color of the text form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));
```
