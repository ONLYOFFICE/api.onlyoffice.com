# SetRole

为当前表单设置角色。

继承自 [ApiFormBase.SetRole](../../ApiFormBase/Methods/SetRole.md)。

## 语法

```javascript
expression.SetRole(role);
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| role | 必需 | string |  | 将附加到当前表单的角色。 |

## 返回值

boolean

## 示例

在文档中为复选框表单分配命名角色。

```javascript editor-docx
// How do I restrict a form field to a specific group of users in a document?

// Control who is responsible for filling each checkbox by attaching a role to it in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Visitor");
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 1");
checkBoxForm.SetRole("Visitor");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 2");
checkBoxForm.SetRole("Visitor");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let role = checkBoxForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
