# Copy

复制当前表单（如果存在形状，则连同形状一起复制）。

继承自 [ApiFormBase.Copy](../../ApiFormBase/Methods/Copy.md)。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiForm](../../Enumeration/ApiForm.md)

## 示例

复制现有的复选框表单字段并将副本插入到文档中。

```javascript editor-forms
// How do I reuse a checkbox form by making an identical copy of it in a document?

// Add a second radio button with the same settings as the first without recreating it from scratch in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
let copyCheckBoxForm = checkBoxForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyCheckBoxForm);
paragraph.AddText(" Single");
```
