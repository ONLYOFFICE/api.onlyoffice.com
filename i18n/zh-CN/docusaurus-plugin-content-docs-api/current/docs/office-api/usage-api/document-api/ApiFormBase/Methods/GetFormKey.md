# GetFormKey

返回当前表单的键。

## 语法

```javascript
expression.GetFormKey();
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索分配给文档中表单字段的键。

```javascript editor-docx
// How do I get the key of a form field in a document?

// Confirm the grouping key of a combo box by reading it back and displaying it.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let key = comboBoxForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
