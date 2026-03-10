# IsDatePicker

检查内容控件是否为日期选择器。

## 语法

```javascript
expression.IsDatePicker();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例展示如何检查内容控件是否为日期选择器。

```javascript editor-docx
let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText(contentControl.IsDatePicker() ? "true" : "false");
doc.AddElement(1, paragraph1);
```
