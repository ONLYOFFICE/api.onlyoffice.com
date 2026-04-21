# MoveUp

将父组合框/下拉列表内容控件中的当前项目向上移动一个元素。

## 语法

```javascript
expression.MoveUp();
```

`expression` - 表示 [ApiContentControlListEntry](../ApiContentControlListEntry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中将父下拉列表或组合框内容控件中的当前项目向上移动一个元素。

```javascript editor-docx
// How do I move up in a document?

// Move up using a content control list entry object in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(3);
listItem.MoveUp();
let paragraph = doc.GetElement(0);
paragraph.Push(cc);
```
