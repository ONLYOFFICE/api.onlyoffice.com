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

检测文档中复选框表单是否作为单选按钮运行。

```javascript editor-forms
// How do I find out if a checkbox form is a radio button in a document?

// Distinguish a radio-style form from a standard checkbox by reading its type in a document.

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
