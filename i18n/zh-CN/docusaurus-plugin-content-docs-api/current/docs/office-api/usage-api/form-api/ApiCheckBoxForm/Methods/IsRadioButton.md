# IsRadioButton

检查当前复选框是否为单选按钮。

## 语法

```javascript
expression.IsRadioButton();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例检查当前复选框是否为单选按钮。

```javascript editor-forms
// How to know whether the checkbox form is radio button.

// Get a boolean value representing whether a current form is a radio button or not.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let radioButton = checkBoxForm.IsRadioButton();
paragraph = Api.CreateParagraph();
paragraph.AddText("The second form from this document is a radio button: " + radioButton);
doc.Push(paragraph);
```
