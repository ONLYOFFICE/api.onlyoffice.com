# SetRole

为当前表单设置角色。

继承自 [ApiFormBase.SetRole](../../ApiFormBase/Methods/SetRole.md)。

## 语法

```javascript
expression.SetRole(role);
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| role | 必需 | string |  | 将附加到当前表单的角色。 |

## 返回值

boolean

## 示例

在文档中为签名字段分配角色。

```javascript editor-forms
// How do I specify who is responsible for signing a particular signature field in a document?

// Label a signature field with a named role to indicate the intended signer in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Signatory");
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
signatureForm.SetRole("Signatory");
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let role = signatureForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
