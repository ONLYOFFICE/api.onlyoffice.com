# SetTextPr

设置当前表单的文本属性。

:::note
仅在此类型表单支持时使用。
:::

继承自 [ApiFormBase.SetTextPr](../../ApiFormBase/Methods/SetTextPr.md)。

## 语法

```javascript
expression.SetTextPr(textPr);
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 将设置到当前表单的文本属性。 |

## 返回值

boolean

## 示例

在文档中为日期表单应用文本格式。

```javascript editor-docx
// How do I apply bold and larger font to a date form in a document?

// Customize the appearance of a date form by changing its font size and weight in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
dateForm.SetTextPr(textPr);
```
