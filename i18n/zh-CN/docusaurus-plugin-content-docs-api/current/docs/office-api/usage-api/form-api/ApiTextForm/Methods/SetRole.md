# SetRole

为当前表单设置角色。

继承自 [ApiFormBase.SetRole](../../ApiFormBase/Methods/SetRole.md)。

## 语法

```javascript
expression.SetRole(role);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| role | 必需 | string |  | 将附加到当前表单的角色。 |

## 返回值

boolean

## 示例

在文档中为文本表单分配角色。

```javascript editor-forms
// How do I designate which role is responsible for filling out a text form in a document?

// Restrict a text form to a specific group of users by giving it a role in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Employee");
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
textForm.SetRole("Employee");
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let role = textForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + role);
doc.Push(paragraph);
```
