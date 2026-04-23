# GetDate

从日期选择器内容控件中检索所选日期值并将其作为 Date 对象返回。

如果内容控件不是日期选择器，则抛出错误。

## 语法

```javascript
expression.GetDate();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

undefined \| Date

## 示例

此示例演示如何从日期选择器内容控件中检索日期。

```javascript editor-docx
let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
contentControl.SetDateFormat("yyyy-mm-dd");
contentControl.SetDate(new Date(1961, 9, 3));
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
let date = contentControl.GetDate();
paragraph.AddText(date.toDateString());
```
