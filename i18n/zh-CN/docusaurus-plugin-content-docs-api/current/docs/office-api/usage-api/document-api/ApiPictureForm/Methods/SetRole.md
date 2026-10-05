# SetRole

为当前表单设置角色。

继承自 [ApiFormBase.SetRole](../../ApiFormBase/Methods/SetRole.md)。

## 语法

```javascript
expression.SetRole(role);
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| role | 必需 | string |  | 将附加到当前表单的角色。 |

## 返回值

boolean

## 示例

在文档中为图片字段分配命名角色。

```javascript editor-docx
// How do I link a picture field to a specific signer or contributor role in a document?

// Tie a picture field to a particular participant so only they fill it in in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Employee");
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetRole("Employee");
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let role = pictureForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
