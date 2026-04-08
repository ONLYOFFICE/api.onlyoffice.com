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

此示例展示如果复选框是单选按钮，如何获取单选按钮组的键。

```javascript editor-forms
// How to get checkbox form radio group.

// Retrieve type of a created checkbox object and display it.

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
