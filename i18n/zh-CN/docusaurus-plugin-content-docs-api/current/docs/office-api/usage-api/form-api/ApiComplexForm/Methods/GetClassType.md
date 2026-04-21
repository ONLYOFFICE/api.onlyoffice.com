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

获取复杂表单对象的类类型。

```javascript editor-forms
// How can I get the class type of a complex form?

// Get the class type of a complex form and display it in the document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm();
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let classType = complexForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
