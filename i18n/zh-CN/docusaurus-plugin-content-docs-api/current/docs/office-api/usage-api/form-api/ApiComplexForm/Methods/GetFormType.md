# GetFormType

返回当前表单的类型。

继承自 [ApiFormBase.GetFormType](../../ApiFormBase/Methods/GetFormType.md)。

## 语法

```javascript
expression.GetFormType();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[FormType](../../Enumeration/FormType.md)

## 示例

获取文档中复合表单的类型。

```javascript editor-forms
// How do I find out what type a form is in a document?

// Identify whether a form belongs to a specific category before processing it in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let formType = complexForm.GetFormType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form type: " + formType);
doc.Push(paragraph);
```
