# GetFormType

返回当前表单的类型。

## 语法

```javascript
expression.GetFormType();
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[FormType](../../Enumeration/FormType.md)

## 示例

读取文档中表单字段的类型。

```javascript editor-forms
// How do I get the type of a form field in a document?

// Distinguish one form from another by printing its type identifier next to it.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let formType = textForm.GetFormType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form type: " + formType);
doc.Push(paragraph);
```
