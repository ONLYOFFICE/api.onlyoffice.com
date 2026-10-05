# Copy

复制当前表单（如果存在形状，则连同形状一起复制）。

继承自 [ApiFormBase.Copy](../../ApiFormBase/Methods/Copy.md)。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiForm](../../Enumeration/ApiForm.md)

## 示例

复制文档中的复合表单并插入副本。

```javascript editor-docx
// How do I copy a complex form to reuse it in a document?

// Create an identical second form from an existing one to repeat the same input structure.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.Add('Text');
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let copyComplexForm = complexForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyComplexForm);
```
