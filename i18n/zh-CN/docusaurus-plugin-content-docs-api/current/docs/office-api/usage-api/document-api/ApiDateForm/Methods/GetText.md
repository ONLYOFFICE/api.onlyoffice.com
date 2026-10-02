# GetText

返回当前表单中的文本。

继承自 [ApiFormBase.GetText](../../ApiFormBase/Methods/GetText.md)。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

提取文档中日期表单的纯文本内容。

```javascript editor-docx
// How do I read the text value stored inside a date form in a document?

// Output the raw string to check what date value the form currently holds.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let text = dateForm.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form text: " + text);
doc.Push(paragraph);
```
