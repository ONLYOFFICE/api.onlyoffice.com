# IsCheckBoxChecked

确定复选框内容控件当前是选中还是未选中。

如果内容控件不是复选框，则抛出错误。

## 语法

```javascript
expression.IsCheckBoxChecked();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

读取文档中复选框内容控件的选中状态。

```javascript editor-docx
// How do I find out whether a checkbox content control is checked in a document?

// Conditionally display text based on whether a checkbox is ticked or unticked in a document.

let doc = Api.GetDocument();
let checkBox = doc.AddCheckBoxContentControl();
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
let isChecked = checkBox.IsCheckBoxChecked();
paragraph.AddText("Checked: " + (isChecked ? "true" : "false"));
```
