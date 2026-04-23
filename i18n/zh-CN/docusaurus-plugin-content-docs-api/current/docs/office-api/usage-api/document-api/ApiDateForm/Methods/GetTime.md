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

此示例展示如何从日期表单获取日期时间戳。

```javascript editor-docx
// How to get a time enetered to the date form.

// Display the time from the date and time answer.

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
