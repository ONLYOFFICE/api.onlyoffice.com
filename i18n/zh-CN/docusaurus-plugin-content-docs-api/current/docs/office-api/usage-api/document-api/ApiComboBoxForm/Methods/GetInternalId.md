# GetInternalId

返回当前表单的内部 ID。

继承自 [ApiFormBase.GetInternalId](../../ApiFormBase/Methods/GetInternalId.md)。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取文档中组合框表单的唯一内部标识符。

```javascript editor-docx
// How do I get the internal identifier of a combo box form in a document?

// Use the identifier to reference or track a specific combo box form programmatically.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let internalId = comboBoxForm.GetInternalId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Internal id: " + internalId);
doc.Push(paragraph);
```
