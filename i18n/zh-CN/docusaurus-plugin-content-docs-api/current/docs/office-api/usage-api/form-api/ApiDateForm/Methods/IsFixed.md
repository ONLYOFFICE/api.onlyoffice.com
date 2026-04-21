# IsFixed

检查当前表单是否为固定大小。

继承自 [ApiFormBase.IsFixed](../../ApiFormBase/Methods/IsFixed.md)。

## 示例

检查当前表单是否为固定大小。

```javascript editor-forms
// How to know whether a text form is fixed or not.

// Display a boolean representing whether a text form is fixed.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(10 * 240, 2 * 240);
let fixed = textForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is fixed: " + fixed);
doc.Push(paragraph);
```
