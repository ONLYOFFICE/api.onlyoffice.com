# CreateDatePickerContentControl

创建新的日期选择器内容控件。

## 语法

```javascript
expression.CreateDatePickerContentControl(datePickerPr);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| datePickerPr | 可选 | [ContentControlDatePr](../../Enumeration/ContentControlDatePr.md) |  | 可选的日期选择器属性。 |

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## 示例

向文档添加日期选择器字段。

```javascript editor-docx
// How do I insert a date picker field into a document?

// Let readers pick a date from a calendar by inserting a date picker control in a document.

let doc = Api.GetDocument();
let cc = Api.CreateDatePickerContentControl({format: 'yyyy.mm.dd'});
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);
```
