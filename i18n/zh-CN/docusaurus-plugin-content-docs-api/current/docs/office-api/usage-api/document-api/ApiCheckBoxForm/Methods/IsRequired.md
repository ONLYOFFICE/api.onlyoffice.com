# IsRequired

检查当前表单是否为必填项。

继承自 [ApiFormBase.IsRequired](../../ApiFormBase/Methods/IsRequired.md)。

## 语法

```javascript
expression.IsRequired();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

确认文档中的复选框表单是否被标记为必填。

```javascript editor-docx
// How do I check if a checkbox form is required in a document?

// Enforce mandatory selection by verifying the required flag on a form field in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.SetRequired(true);
let required = checkBoxForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The second form from this document is required: " + required);
doc.Push(paragraph);
```
