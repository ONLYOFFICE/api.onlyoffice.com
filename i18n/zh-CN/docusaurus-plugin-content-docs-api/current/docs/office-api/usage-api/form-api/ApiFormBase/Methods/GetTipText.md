# GetTipText

返回当前表单的提示文本。

## 语法

```javascript
expression.GetTipText();
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索分配给文档中表单字段的工具提示文本。

```javascript editor-forms
// How do I read the instructional hint shown when a user hovers over a form field in a document?

// Display the tooltip message of a drop-down form to verify what guidance is shown to the user in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let tipText = comboBoxForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tip text: " + tipText);
doc.Push(paragraph);
```
