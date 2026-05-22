# GetCharactersLimit

返回文本字段的字符数限制。

## 语法

```javascript
expression.GetCharactersLimit();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取文档中文本字段允许的最大字符数。

```javascript editor-docx
// How do I check how many characters a text entry area is limited to in a document?

// Verify the character cap set on a text field to ensure input constraints are correct in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetCharactersLimit(5);
textForm.SetText("John Smith");
let limit = textForm.GetCharactersLimit();
paragraph = Api.CreateParagraph();
paragraph.AddText("Characters limit: " + limit);
doc.Push(paragraph);
```
