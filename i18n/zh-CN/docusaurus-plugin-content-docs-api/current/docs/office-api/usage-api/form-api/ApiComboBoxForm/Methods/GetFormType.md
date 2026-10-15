# GetFormType

返回当前表单的类型。

继承自 [ApiFormBase.GetFormType](../../ApiFormBase/Methods/GetFormType.md)。

## 语法

```javascript
expression.GetFormType();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[FormType](../../Enumeration/FormType.md)

## 示例

读取文档中组合框表单的类型。

```javascript editor-forms
// How do I find out what type a combo box form is in a document?

// Distinguish a combo box from other form types by checking the type string it returns.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let formType = comboBoxForm.GetFormType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form type: " + formType);
doc.Push(paragraph);
```
