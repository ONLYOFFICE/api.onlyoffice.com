# GetListValues

返回当前组合框的列表值。

## 语法

```javascript
expression.GetListValues();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string[]

## 示例

获取文档中组合框的列表值。

```javascript editor-docx
// How to get list values of a combobox form.

// Display each combobox item in the document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetListValues(["Latvia", "USA", "UK"]);
let listValues = comboBoxForm.GetListValues();
paragraph = Api.CreateParagraph();
paragraph.AddText("Combo box list values: ");
paragraph.AddLineBreak();
for (let i = 0; i < listValues.length; i++ ){
	paragraph.AddText(listValues[i]);
	paragraph.AddLineBreak();
}
doc.Push(paragraph);
```
