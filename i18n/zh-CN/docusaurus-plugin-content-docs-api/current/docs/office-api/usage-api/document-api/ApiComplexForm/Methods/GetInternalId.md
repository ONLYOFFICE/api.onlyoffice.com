# GetInternalId

返回当前表单的内部 ID。

继承自 [ApiFormBase.GetInternalId](../../ApiFormBase/Methods/GetInternalId.md)。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中复合表单的内部标识符。

```javascript editor-docx
// How do I retrieve the internal ID assigned to a form in a document?

// Track or reference a specific form programmatically using its unique internal ID in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let internalId = complexForm.GetInternalId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Internal id: " + internalId);
doc.Push(paragraph);
```
