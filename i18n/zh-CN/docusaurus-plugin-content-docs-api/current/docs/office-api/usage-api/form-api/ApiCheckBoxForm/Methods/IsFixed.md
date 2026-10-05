# IsFixed

检查当前表单是否为固定大小。

继承自 [ApiFormBase.IsFixed](../../ApiFormBase/Methods/IsFixed.md)。

## 语法

```javascript
expression.IsFixed();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

验证文档中的复选框表单是否具有固定大小。

```javascript editor-forms
// How do I check if a checkbox form is fixed-size in a document?

// Confirm that a form converted to fixed dimensions reports its fixed state correctly in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.ToFixed(2 * 240, 1 * 240);
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.ToFixed(2 * 240, 1 * 240);
let fixed = checkBoxForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The second form from this document has a fixed size: " + fixed);
doc.Push(paragraph);
```
