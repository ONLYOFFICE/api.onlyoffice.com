# SetDateFormat

设置日期选择器内容控件的日期格式。
此方法允许设置日期在日期选择器内容控件中显示的格式。
格式字符串应使用常见的日期格式模式指定（例如，“mm.dd.yyyy”）。

## 语法

```javascript
expression.SetDateFormat(dateFormat);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| dateFormat | 必需 | string |  | 所需的日期格式（例如，“mm.dd.yyyy”）。 |

## 返回值

boolean

## 示例

在文档中为日期选择器内容控件应用自定义日期格式。

```javascript editor-docx
// How do I control how a date is displayed in a date picker content control in a document?

// Enforce a consistent date style across forms by setting a format pattern in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.SetDateFormat('dd.mm.yyyy');
contentControl.SetDate(new Date(1998, 2, 1));
```
