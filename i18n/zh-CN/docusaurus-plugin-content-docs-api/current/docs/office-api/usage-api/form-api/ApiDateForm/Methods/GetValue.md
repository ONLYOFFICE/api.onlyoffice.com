# GetValue

返回当前表单的日期。

## 语法

```javascript
expression.GetValue();
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Date \| undefined

## 示例

```javascript editor-forms
// The GetValue method returns a Date object, or undefined if the form still shows its placeholder.

// Set a date on the form and then retrieve it to display the date string.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "EventDate", "tip": "Enter the event date", "required": true, "placeholder": "Event date", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetDate(new Date(2024, 0, 15));
let value = dateForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Date form value: " + value.toString());
doc.Push(paragraph);
```
