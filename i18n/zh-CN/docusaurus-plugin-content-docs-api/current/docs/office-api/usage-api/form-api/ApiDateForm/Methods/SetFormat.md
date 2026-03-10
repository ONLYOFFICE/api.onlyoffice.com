# SetFormat

设置当前表单的日期格式。

## 语法

```javascript
expression.SetFormat(sFormat);
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | 必需 | string |  | 日期格式。例如，mm.dd.yyyy |

## 返回值

boolean

## 示例

此示例展示如何在日期表单上设置日期格式。

```javascript editor-forms
// Specify the format of the date for the form.

// How to change the date format of the form to "dddd, dd MMMM yyyy".

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetFormat("dddd, dd MMMM yyyy");
let format = dateForm.GetFormat();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has format: " + format);
doc.Push(paragraph);
```
