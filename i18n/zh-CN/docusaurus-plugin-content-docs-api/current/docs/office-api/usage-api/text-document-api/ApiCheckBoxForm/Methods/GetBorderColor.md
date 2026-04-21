# GetBorderColor

返回当前表单的边框颜色。

继承自 [ApiFormBase.GetBorderColor](../../ApiFormBase/Methods/GetBorderColor.md)。

## 示例

获取文档中表单的边框颜色。

```javascript editor-docx
// How to get the border color of a text form.

// Retrieve the border color of a created text form and display it.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetBorderColor(Api.RGB(255, 111, 61));
let borderColor = textForm.GetBorderColor();
paragraph = Api.CreateParagraph();
paragraph.AddText("Border color (RGB): (" + borderColor.r + ", " + borderColor.g + ", " + borderColor.b + ")");
doc.Push(paragraph);
```
