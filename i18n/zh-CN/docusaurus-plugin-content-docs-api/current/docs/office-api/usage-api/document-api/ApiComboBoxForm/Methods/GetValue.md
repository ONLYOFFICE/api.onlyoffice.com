# GetValue

返回组合框表单的当前文本值。

## 语法

```javascript
expression.GetValue();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

```javascript editor-docx
// The GetValue method returns the currently selected or entered text in the combo box.

// Set list values and select one, then read it back and display it in the document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Department", "tip": "Select your department", "required": true, "placeholder": "Department", "editable": false, "list": ["HR", "Engineering", "Marketing"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetListValues(["HR", "Engineering", "Marketing"]);
comboBoxForm.SetValue("Engineering");
let value = comboBoxForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Selected department: " + value);
doc.Push(paragraph);
```
