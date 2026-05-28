# GetClassType

返回 ApiComplexForm 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"form"

## 示例

检索文档中复杂表单的类类型。

```javascript editor-docx
// How do I get the class type of a complex form in a document?

// Identify what kind of object a complex form is by reading its type label at runtime.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm();
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let classType = complexForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
