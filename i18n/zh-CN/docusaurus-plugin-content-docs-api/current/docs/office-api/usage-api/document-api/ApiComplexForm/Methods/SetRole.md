# SetRole

为当前表单设置角色。

继承自 [ApiFormBase.SetRole](../../ApiFormBase/Methods/SetRole.md)。

## 语法

```javascript
expression.SetRole(role);
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| role | 必需 | string |  | 将附加到当前表单的角色。 |

## 返回值

boolean

## 示例

在文档中为复合表单分配角色。

```javascript editor-docx
// How do I set the role of a form in a document?

// Restrict form filling to a specific group of participants by assigning a named role.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
let paragraph = doc.GetElement(0);
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.Add("Name");
paragraph.AddElement(complexForm);
complexForm.SetRole("Customer");
let role = complexForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
