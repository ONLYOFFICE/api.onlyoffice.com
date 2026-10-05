# GetTag

返回当前表单的标签属性。

继承自 [ApiFormBase.GetTag](../../ApiFormBase/Methods/GetTag.md)。

## 语法

```javascript
expression.GetTag();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中附加到复合表单的标签值。

```javascript editor-docx
// How do I retrieve the tag assigned to a form in a document?

// Use the tag to identify or group related forms when processing them programmatically in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let complexForm = Api.CreateComplexForm({"key": "Complex1", "tag": "Custom tag"});
paragraph.AddElement(complexForm);
let tag = complexForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
