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

从文档中的组合框表单检索所有下拉选项。

```javascript editor-docx
// How do I read the list of selectable items from a combo box form in a document?

// Print every available option to confirm the dropdown choices are set correctly.

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
