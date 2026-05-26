# GetDate

返回当前表单的日期。

## 语法

```javascript
expression.GetDate();
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

undefined \| Date

## 示例

检索文档中日期表单字段存储的日期值。

```javascript editor-forms
// How do I read the current date from a date form in a document?

// Display the date a user entered into a date form by fetching its stored value in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetDate(new Date());
let formDate = dateForm.GetDate();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has setted time: " + formDate.toString());
doc.Push(paragraph);
```
