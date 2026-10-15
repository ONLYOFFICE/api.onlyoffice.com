# IsFixed

检查当前表单是否为固定大小。

继承自 [ApiFormBase.IsFixed](../../ApiFormBase/Methods/IsFixed.md)。

## 语法

```javascript
expression.IsFixed();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的复合表单是否具有固定大小。

```javascript editor-docx
// How do I determine if a form is fixed in size in a document?

// Verify the fixed-size status of a form before adjusting its layout.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let isFixed = complexForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("Complex form is fixed: " + isFixed);
doc.Push(paragraph);
```
