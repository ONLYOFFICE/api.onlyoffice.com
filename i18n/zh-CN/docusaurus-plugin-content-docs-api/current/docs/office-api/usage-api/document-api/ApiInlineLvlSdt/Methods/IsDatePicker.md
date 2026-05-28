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

确定文档中的内联内容控件是否为日期选择器。

```javascript editor-docx
// How do I verify that a content control is a date picker in a document?

// Identify date picker controls to handle date input fields separately from other control types in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText(contentControl.IsDatePicker() ? "true" : "false");
doc.AddElement(1, paragraph1);
```
