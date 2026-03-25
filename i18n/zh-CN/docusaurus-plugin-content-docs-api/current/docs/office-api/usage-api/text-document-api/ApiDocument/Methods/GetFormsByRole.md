# GetFormsByRole

返回文档中具有指定角色名称的所有表单的列表。

## 语法

```javascript
expression.GetFormsByRole(role);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| role | 必需 | string |  | 表单角色。 |

## 返回值

[ApiForm](../../Enumeration/ApiForm.md)[]

## 示例

此示例展示如何获取文档中具有指定角色的所有表单列表。

```javascript editor-docx
let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Employee");
roles.Add("Chief");
let textForm = Api.CreateTextForm({"role" : "Employee", "key": "Employee FirstName", "tip": "Enter your first name", "tag": "form_1", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let comboBoxForm = Api.CreateComboBoxForm({"role" : "Employee", "key": "Country", "tip": "Choose your country", "tag": "form_1", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
paragraph.AddLineBreak();
paragraph.AddElement(comboBoxForm);

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
textForm = Api.CreateTextForm({"role" : "Chief", "key": "Chief FirstName", "tip": "Enter your first name", "tag": "form_1", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
paragraph.AddElement(textForm);

let forms = doc.GetFormsByRole("Employee");
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText("Number of forms with role 'Employee': " + forms.length);

forms = doc.GetFormsByRole("Chief");
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText("Number of forms with role 'Chief': " + forms.length);

```
