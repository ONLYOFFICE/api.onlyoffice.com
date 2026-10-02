# GetPlaceholderText

返回当前表单的占位符文本。

继承自 [ApiFormBase.GetPlaceholderText](../../ApiFormBase/Methods/GetPlaceholderText.md)。

## 语法

```javascript
expression.GetPlaceholderText();
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中日期表单内显示的占位符文本。

```javascript editor-forms
// How do I get the placeholder text shown in a date form in a document?

// Confirm the hint text after updating it to ensure it reflects the new value.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetPlaceholderText("08.13.2011");
let placeholderText = dateForm.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);
```
