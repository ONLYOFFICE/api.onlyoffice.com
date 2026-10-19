# IsFilled

检查当前表单是否已填写。

继承自 [ApiFormBase.IsFilled](../../ApiFormBase/Methods/IsFilled.md)。

## 语法

```javascript
expression.IsFilled();
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的日期表单是否已填写。

```javascript editor-forms
// How do I tell if a date form contains a date in a document?

// Verify that an empty date form and a populated one return different fill statuses in a document.

let doc = Api.GetDocument();
let dateForm1 = Api.CreateDateForm({"key": "Date1", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm1);
let dateForm2 = Api.CreateDateForm({"key": "Date2", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
paragraph.AddElement(dateForm2);
dateForm2.SetTime(new Date().getTime());
let filled1 = dateForm1.IsFilled();
let filled2 = dateForm2.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form is filled: " + filled1);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The second date form is filled: " + filled2);
doc.Push(paragraph);
```
