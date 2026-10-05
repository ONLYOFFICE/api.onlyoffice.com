# GetFormType

返回当前表单的类型。

继承自 [ApiFormBase.GetFormType](../../ApiFormBase/Methods/GetFormType.md)。

## 语法

```javascript
expression.GetFormType();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[FormType](../../Enumeration/FormType.md)

## 示例

读取文档中可填写字段的类型。

```javascript editor-forms
// How do I determine what kind of fillable field is present in a document?

// Distinguish a text field from other field varieties by checking its type in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let formType = textForm.GetFormType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form type: " + formType);
doc.Push(paragraph);
```
