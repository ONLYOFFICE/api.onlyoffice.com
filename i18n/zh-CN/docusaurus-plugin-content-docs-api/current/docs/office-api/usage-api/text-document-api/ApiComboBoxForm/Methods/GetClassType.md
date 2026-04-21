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

获取组合框表单对象的类类型。

```javascript editor-docx
// How can I get the class type of a combo box form?

// Get the class type of a combo box form and display it in the document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let classType = comboBoxForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
