# IsRequired

检查当前表单是否为必填项。

## 语法

```javascript
expression.IsRequired();
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

确定文档中的表单字段是否标记为必填。

```javascript editor-docx
// How do I check if a form field must be filled out before the document is submitted in a document?

// Confirm whether a form field is required so the result can be shown to the reader in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let required = textForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
