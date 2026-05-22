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

确定文档中的内联内容控件是否为复选框。

```javascript editor-docx
// How do I check whether a content control acts as a checkbox in a document?

// Distinguish a checkbox control from other control types before applying checkbox-specific logic in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddCheckBoxContentControl();
let isCheckBox = inlineControl.IsCheckBox();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is the content control a checkbox? " + isCheckBox);
doc.Push(paragraph);
```
