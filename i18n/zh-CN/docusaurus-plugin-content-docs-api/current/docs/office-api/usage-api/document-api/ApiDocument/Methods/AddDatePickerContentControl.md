# AddDatePickerContentControl

向文档添加新的日期选择器内容控件。

## 语法

```javascript
expression.AddDatePickerContentControl(datePickerPr);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| datePickerPr | 可选 | [ContentControlDatePr](../../Enumeration/ContentControlDatePr.md) |  | 可选的日期选择器属性。 |

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## 示例

在文档中添加日期选择器内容控件。

```javascript editor-docx
// How do I insert a date picker field into a document?

// Let readers select a date from a calendar picker embedded in the document.

let doc = Api.GetDocument();
doc.AddDatePickerContentControl();
```
