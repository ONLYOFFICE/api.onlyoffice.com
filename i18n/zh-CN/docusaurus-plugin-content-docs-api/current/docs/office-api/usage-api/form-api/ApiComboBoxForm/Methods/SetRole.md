# SetRole

为当前表单设置角色。

继承自 [ApiFormBase.SetRole](../../ApiFormBase/Methods/SetRole.md)。

## 语法

```javascript
expression.SetRole(role);
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| role | 必需 | string |  | 将附加到当前表单的角色。 |

## 返回值

boolean

## 示例

在文档中为组合框表单分配角色。

```javascript editor-forms
// How do I assign a role to a combo box form in a document?

// Restrict a combo box to a specific participant role so only that role can fill it in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
comboBoxForm.SetRole("Customer");
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let role = comboBoxForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
