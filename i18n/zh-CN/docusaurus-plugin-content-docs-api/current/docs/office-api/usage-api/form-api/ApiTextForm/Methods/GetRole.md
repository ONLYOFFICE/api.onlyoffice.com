# GetRole

返回当前表单的角色。

继承自 [ApiFormBase.GetRole](../../ApiFormBase/Methods/GetRole.md)。

## 语法

```javascript
expression.GetRole();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中分配给文本字段的角色。

```javascript editor-forms
// How do I find out what role is associated with a text entry area in a document?

// Inspect the responsibility label attached to a text field to understand its purpose in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let role = textForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + role);
doc.Push(paragraph);
```
