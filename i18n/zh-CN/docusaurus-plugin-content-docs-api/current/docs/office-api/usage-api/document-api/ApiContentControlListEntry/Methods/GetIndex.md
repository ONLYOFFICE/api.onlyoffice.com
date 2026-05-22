# GetIndex

返回组合框/下拉列表内容控件中内容控件列表项的索引。

## 语法

```javascript
expression.GetIndex();
```

`expression` - 表示 [ApiContentControlListEntry](../ApiContentControlListEntry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

检索文档中下拉列表条目在其列表内的位置。

```javascript editor-docx
// How do I find the index of a specific item in a dropdown list in a document?

// Check where a list entry sits when you need to track or compare item order in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let paragraph = Api.CreateParagraph();
let contentControlItem = contentControlList.GetItem(1);
let index = contentControlItem.GetIndex();
paragraph.AddText("Index of the content control list entry:" + index);
doc.AddElement(0, paragraph);
```
