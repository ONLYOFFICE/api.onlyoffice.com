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

此示例展示如何为日期表单设置日期。

```javascript editor-docx
// How to add a time to the date form.

// Set the current time to the date form.

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
