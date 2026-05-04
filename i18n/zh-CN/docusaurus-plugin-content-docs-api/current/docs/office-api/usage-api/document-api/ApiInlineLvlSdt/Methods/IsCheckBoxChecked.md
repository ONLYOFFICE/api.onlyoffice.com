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

检查文档中复选框内容控件的状态。

```javascript editor-docx
// How can I is check box checked using an inline content control in a document?

// Is check box checked for an inline content control in a document.

let doc = Api.GetDocument();
let checkBox = doc.AddCheckBoxContentControl();
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
let isChecked = checkBox.IsCheckBoxChecked();
paragraph.AddText("Checked: " + (isChecked ? "true" : "false"));
```
