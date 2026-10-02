# GetInternalId

返回当前表单的内部 ID。

继承自 [ApiFormBase.GetInternalId](../../ApiFormBase/Methods/GetInternalId.md)。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中文本字段的内部标识符。

```javascript editor-forms
// How do I obtain the unique system identifier for a text entry area in a document?

// Capture the auto-assigned identifier of a text field to track it programmatically in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let internalId = textForm.GetInternalId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Internal id: " + internalId);
doc.Push(paragraph);
```
