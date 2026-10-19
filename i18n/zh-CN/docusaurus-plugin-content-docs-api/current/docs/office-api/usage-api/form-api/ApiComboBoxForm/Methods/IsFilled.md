# IsFilled

检查当前表单是否已填写。

继承自 [ApiFormBase.IsFilled](../../ApiFormBase/Methods/IsFilled.md)。

## 语法

```javascript
expression.IsFilled();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检测文档中的组合框表单是否已选择或输入值。

```javascript editor-forms
// How do I tell if a combo box form field has been filled in a document?

// Compare an empty combo box against a populated one to verify their fill status in a document.

let doc = Api.GetDocument();
let comboBoxForm1 = Api.CreateComboBoxForm({"key": "Country1", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": true, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm1);
let comboBoxForm2 = Api.CreateComboBoxForm({"key": "Country2", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": true, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
paragraph.AddElement(comboBoxForm2);
comboBoxForm2.SetText("Latvia");
let filled1 = comboBoxForm1.IsFilled();
let filled2 = comboBoxForm2.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first combobox form is filled: " + filled1);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The second combobox form is filled: " + filled2);
doc.Push(paragraph);
```
