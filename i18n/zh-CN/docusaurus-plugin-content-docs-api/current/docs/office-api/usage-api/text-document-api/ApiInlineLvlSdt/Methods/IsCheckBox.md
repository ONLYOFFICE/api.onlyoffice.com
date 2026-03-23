# IsCheckBox

检查内容控件是否为复选框。

## 语法

```javascript
expression.IsCheckBox();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例展示如何检查内联内容控件是否为复选框。

```javascript editor-docx
let doc = Api.GetDocument();
let inlineControl = doc.AddCheckBoxContentControl();
let isCheckBox = inlineControl.IsCheckBox();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is the content control a checkbox? " + isCheckBox);
doc.Push(paragraph);
```
