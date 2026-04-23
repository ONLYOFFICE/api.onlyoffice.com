# GetLabel

返回当前复选框的标签。

## 语法

```javascript
expression.GetLabel();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例从复选框表单获取标签文本。

```javascript editor-forms
// How to retrieve a label from the checkbox form.

// Get the label text from the checkbox.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Select if you agree to terms", "required": true, "key" : "Terms agreement"});
checkBoxForm.SetLabel(" I agree to the terms and conditions");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);

// Get the label from the checkbox form
let label = checkBoxForm.GetLabel();

// Add the retrieved label text to the document
paragraph.AddLineBreak();
paragraph.AddLineBreak();
paragraph.AddText("Retrieved label: " + label);
```
