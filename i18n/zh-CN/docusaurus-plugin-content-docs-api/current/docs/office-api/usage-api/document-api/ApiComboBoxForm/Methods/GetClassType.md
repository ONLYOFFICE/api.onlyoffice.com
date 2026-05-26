# GetClassType

返回 ApiComboBoxForm 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"comboBoxForm"

## 示例

识别文档中组合框表单的类类型。

```javascript editor-docx
// How do I check what class type a combo box form belongs to in a document?

// Distinguish a combo box form from other form objects by reading its type label.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let classType = comboBoxForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
