# ClearAllFields

清除文档中的所有表单。

## 语法

```javascript
expression.ClearAllFields();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

清除文档中所有表单字段的值。

```javascript editor-docx
// How do I reset every form field to its empty state in a document?

// Wipe entered data from text forms and content controls to start fresh in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
paragraph.AddLineBreak();
paragraph.AddElement(textForm);
doc.ClearAllFields();
paragraph = Api.CreateParagraph();
paragraph.AddText("All fields from this document were just cleared.");
doc.Push(paragraph);
```
