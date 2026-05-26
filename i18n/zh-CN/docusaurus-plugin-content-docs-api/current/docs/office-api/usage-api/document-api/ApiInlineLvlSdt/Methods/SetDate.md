# SetDate

设置日期选择器内容控件的值。

## 语法

```javascript
expression.SetDate(date);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| date | 必需 | Date |  | 要为日期选择器设置的日期值。 |

## 返回值

boolean

## 示例

为文档中的日期选择器内容控件分配特定日期。

```javascript editor-docx
// How do I set the selected date on a date picker content control in a document?

// Pre-fill a date picker with a fixed date so users see a ready-made value in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
contentControl.SetDate(new Date(1998, 4, 10));
```
