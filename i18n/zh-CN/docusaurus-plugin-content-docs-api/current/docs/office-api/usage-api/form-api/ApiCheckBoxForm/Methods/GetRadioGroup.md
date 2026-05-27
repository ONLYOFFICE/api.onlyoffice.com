# GetRadioGroup

如果当前复选框是单选按钮，则返回单选按钮组的键。

## 语法

```javascript
expression.GetRadioGroup();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索将文档中相关单选按钮链接在一起的单选组名称。

```javascript editor-forms
// How do I find out which radio group a checkbox button belongs to in a document?

// Confirm that multiple radio buttons share the same group so only one can be selected at a time in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
checkBoxForm.SetRadioGroup("Marital status");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
checkBoxForm.SetRadioGroup("Marital status");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let radioGroup = checkBoxForm.GetRadioGroup();
paragraph = Api.CreateParagraph();
paragraph.AddText("Radio group name of the radio buttons in this document: " + radioGroup);
doc.Push(paragraph);
```
