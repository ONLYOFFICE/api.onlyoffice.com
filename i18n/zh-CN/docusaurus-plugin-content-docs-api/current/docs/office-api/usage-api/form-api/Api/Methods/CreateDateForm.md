# CreateDateForm

使用指定的日期表单属性创建日期表单。

## 语法

```javascript
expression.CreateDateForm(formPr);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | 必需 | [DateFormPr](../../Enumeration/DateFormPr.md) |  | 日期表单属性。 |

## 返回值

[ApiDateForm](../../ApiDateForm/ApiDateForm.md)

## 示例

在文档中创建用户输入日历日期的日期输入字段。

```javascript editor-forms
// How do I add a date picker field to a document?

// Set up a form field that accepts date values with specific formatting in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({
	"key": "Nowadays",
	"tip": "Enter current date",
	"required": true,
	"placeholder": "Your date here",
	"format": "mm.dd.yyyy",
	"lang": "en-US"
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
```
