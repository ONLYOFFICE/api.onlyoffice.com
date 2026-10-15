# IsFixed

检查当前表单是否为固定大小。

继承自 [ApiFormBase.IsFixed](../../ApiFormBase/Methods/IsFixed.md)。

## 语法

```javascript
expression.IsFixed();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

验证文档中的组合框表单是否具有固定的大小和位置。

```javascript editor-forms
// How do I check if a combo box form is locked to a fixed frame in a document?

// Confirm that converting a combo box to fixed mode is reflected when reading its state in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.ToFixed(7 * 240, 2 * 240);
let fixed = comboBoxForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is fixed: " + fixed);
doc.Push(paragraph);
```
