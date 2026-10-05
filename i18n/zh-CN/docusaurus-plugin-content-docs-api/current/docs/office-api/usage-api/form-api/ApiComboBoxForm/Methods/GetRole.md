# GetRole

返回当前表单的角色。

继承自 [ApiFormBase.GetRole](../../ApiFormBase/Methods/GetRole.md)。

## 语法

```javascript
expression.GetRole();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中分配给组合框表单的角色。

```javascript editor-forms
// How do I check the role of a combo box form in a document?

// Determine the purpose of a combo box within a form by inspecting its assigned role.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let role = comboBoxForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
