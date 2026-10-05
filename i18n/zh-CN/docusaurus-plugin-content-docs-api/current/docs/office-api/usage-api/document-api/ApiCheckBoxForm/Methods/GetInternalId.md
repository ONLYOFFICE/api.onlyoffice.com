# GetInternalId

返回当前表单的内部 ID。

继承自 [ApiFormBase.GetInternalId](../../ApiFormBase/Methods/GetInternalId.md)。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取文档中复选框表单的唯一内部标识符。

```javascript editor-docx
// How do I get the internal identifier of a checkbox form in a document?

// Track a specific checkbox across operations by reading its system-assigned identifier in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
let internalId = checkBoxForm.GetInternalId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Internal id: " + internalId);
doc.Push(paragraph);
```
