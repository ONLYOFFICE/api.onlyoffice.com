# IsMultiline

检查当前文本字段是否为多行。

## 语法

```javascript
expression.IsMultiline();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的文本字段是否接受多行输入。

```javascript editor-forms
// How do I find out if a form field allows line breaks and wrapping in a document?

// Confirm that a text field supports more than one line of text in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let multiline = textForm.IsMultiline();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is multiline: " + multiline);
doc.Push(paragraph);
```
