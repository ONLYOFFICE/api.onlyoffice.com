# IsRequired

检查当前表单是否为必填项。

继承自 [ApiFormBase.IsRequired](../../ApiFormBase/Methods/IsRequired.md)。

## 语法

```javascript
expression.IsRequired();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的复合表单是否被标记为必填。

```javascript editor-docx
// How do I find out if a form must be filled out in a document?

// Confirm a form's required status before submitting or processing the document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1", "required": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let required = complexForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
