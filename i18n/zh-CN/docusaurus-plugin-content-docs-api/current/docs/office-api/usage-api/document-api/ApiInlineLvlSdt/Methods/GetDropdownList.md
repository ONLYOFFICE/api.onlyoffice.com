# GetDropdownList

返回组合框/下拉列表内容控件的值列表。

## 语法

```javascript
expression.GetDropdownList();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiContentControlList](../../ApiContentControlList/ApiContentControlList.md)

## 示例

从文档中的内联内容控件检索下拉列表对象。

```javascript editor-docx
// How do I access the dropdown list attached to a content control in a document?

// Inspect the type of a dropdown list tied to an inline content control in a document.

let doc = Api.GetDocument();
let cc = Api.CreateDropDownListContentControl([{display: 'one', value: '1'}, {display: 'two', value: '2'}], 1);
let paragraph = Api.CreateParagraph();
let contentControlList = cc.GetDropdownList();
paragraph.AddText("Class Type = " + contentControlList.GetClassType());
doc.Push(paragraph);
```
