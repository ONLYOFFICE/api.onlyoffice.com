# ClearContent

清除当前复合表单的所有内容，将其重置为占位符状态。

## 语法

```javascript
expression.ClearContent();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

清除文档中复杂表单的内容。

```javascript editor-docx
// How do I clear the content inside a complex form in a document?

// Wipe user-entered values from a complex form without removing the form structure itself.

let doc = Api.GetDocument()
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.Add(Api.CreateCheckBoxForm());
complexForm.Add("Text");
complexForm.ClearContent();
doc.Push(paragraph);
```
