# GetRole

返回当前表单的角色。

继承自 [ApiFormBase.GetRole](../../ApiFormBase/Methods/GetRole.md)。

## 语法

```javascript
expression.GetRole();
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中日期表单所分配的角色。

```javascript editor-forms
// How do I find the role assigned to a date form in a document?

// Display the role to understand the form's purpose within the document structure.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let role = dateForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
