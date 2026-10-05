# GetTipText

返回当前表单的提示文本。

继承自 [ApiFormBase.GetTipText](../../ApiFormBase/Methods/GetTipText.md)。

## 语法

```javascript
expression.GetTipText();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中组合框表单的工具提示文本。

```javascript editor-forms
// How do I retrieve the tooltip message shown on a combo box in a document?

// Confirm that the hint text set on a form field matches the expected prompt in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let tipText = comboBoxForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tip text: " + tipText);
doc.Push(paragraph);
```
