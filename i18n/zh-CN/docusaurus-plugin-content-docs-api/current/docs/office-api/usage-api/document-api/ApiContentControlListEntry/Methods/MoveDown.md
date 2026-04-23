# MoveDown

将父组合框/下拉列表内容控件中的当前项目向下移动一个元素，使其位于原本跟随它的项目之后。

## 语法

```javascript
expression.MoveDown();
```

`expression` - 表示 [ApiContentControlListEntry](../ApiContentControlListEntry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例将下拉列表或组合框内容控件中的项目向下移动一项，使其位于原本跟随它的项目之后。

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(0);
listItem.MoveDown();
let paragraph = doc.GetElement(0);
paragraph.Push(cc);

```
