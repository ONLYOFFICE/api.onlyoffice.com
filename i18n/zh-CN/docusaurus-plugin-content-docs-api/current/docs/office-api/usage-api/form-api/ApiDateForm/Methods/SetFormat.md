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

在文档中为日期表单应用日期显示格式。

```javascript editor-forms
// How do I change the way dates are formatted in a date form in a document?

// Switch a date form to a long-form date pattern and verify the updated format in a document.

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
