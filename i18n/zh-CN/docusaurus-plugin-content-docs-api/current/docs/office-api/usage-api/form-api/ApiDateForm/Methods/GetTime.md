# GetTime

返回当前表单的时间戳。

## 语法

```javascript
expression.GetTime();
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

undefined \| number

## 示例

读取文档中日期表单存储的时间戳。

```javascript editor-forms
// How do I get the date and time value entered into a date form in a document?

// Convert the returned timestamp to a readable date to display it as a formatted string.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetTime(new Date().getTime());
let timeStamp = dateForm.GetTime();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has setted time: " + new Date(timeStamp));
doc.Push(paragraph);
```
