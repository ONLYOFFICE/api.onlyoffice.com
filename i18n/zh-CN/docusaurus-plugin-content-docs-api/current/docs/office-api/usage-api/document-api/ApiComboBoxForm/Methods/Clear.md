# Clear

清除当前表单。

继承自 [ApiFormBase.Clear](../../ApiFormBase/Methods/Clear.md)。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

清除文档中组合框表单字段的所选值。

```javascript editor-docx
// How do I reset a combo box form field to its empty state in a document?

// Remove a previously entered answer from a combo box so the field shows its placeholder again in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetText("John Smith");
comboBoxForm.Clear();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document was cleared.");
doc.Push(paragraph);
```
