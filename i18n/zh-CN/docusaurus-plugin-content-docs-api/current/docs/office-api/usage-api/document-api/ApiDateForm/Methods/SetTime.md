# SetTime

设置当前表单的时间戳。

## 语法

```javascript
expression.SetTime(nTimeStamp);
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | 必需 | number |  | 将设置到当前日期表单的时间戳。 |

## 返回值

boolean

## 示例

在文档中为日期表单设置时间戳值。

```javascript editor-docx
// How do I set the current date and time on a date form in a document?

// Pre-fill a date form with a specific point in time to reflect today's date in a document.

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
