# GetPlaceholderText

返回当前表单的占位符文本。

## 语法

```javascript
expression.GetPlaceholderText();
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中表单字段的占位符文本。

```javascript editor-docx
// How do I get the placeholder text of a form field in a document?

// Confirm a hint label by retrieving the placeholder text after setting it on a form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetPlaceholderText("First name");
let placeholderText = textForm.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);
```
