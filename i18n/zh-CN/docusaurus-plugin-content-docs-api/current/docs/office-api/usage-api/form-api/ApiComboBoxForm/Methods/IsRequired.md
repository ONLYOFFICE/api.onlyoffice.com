# IsRequired

检查当前表单是否为必填项。

继承自 [ApiFormBase.IsRequired](../../ApiFormBase/Methods/IsRequired.md)。

## 语法

```javascript
expression.IsRequired();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

验证文档中的组合框表单是否被标记为必填。

```javascript editor-forms
// How do I check if a combo box form must be filled out before submitting a document?

// Read the required flag on a form field to enforce completion rules in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let required = comboBoxForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
