# GetPlaceholderText

返回当前表单的占位符文本。

继承自 [ApiFormBase.GetPlaceholderText](../../ApiFormBase/Methods/GetPlaceholderText.md)。

## 语法

```javascript
expression.GetPlaceholderText();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中空文本字段内显示的提示文本。

```javascript editor-docx
// How do I find out what placeholder text appears in a text entry area in a document?

// Check the instructional text displayed before a user fills in a text field in a document.

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
