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

获取文档中内容控件的下拉列表。

```javascript editor-docx
// How do I get the dropdown list in a document?

// Get the dropdown list using an inline content control object in a document.

let doc = Api.GetDocument();
let cc = Api.CreateDropDownListContentControl([{display: 'one', value: '1'}, {display: 'two', value: '2'}], 1);
let paragraph = Api.CreateParagraph();
let contentControlList = cc.GetDropdownList();
paragraph.AddText("Class Type = " + contentControlList.GetClassType());
doc.Push(paragraph);
```
