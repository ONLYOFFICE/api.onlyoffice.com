# IsDropDownList

检查内容控件是否为下拉列表。

## 语法

```javascript
expression.IsDropDownList();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

确定文档中的内联内容控件是否为下拉列表。

```javascript editor-docx
// How do I check whether a content control is a dropdown list in a document?

// Distinguish a dropdown list from combo boxes or text controls before reading its selected option in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddDropDownListContentControl();
let isDropDown = inlineControl.IsDropDownList();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a dropdown list? " + isDropDown);
doc.Push(paragraph);
```
