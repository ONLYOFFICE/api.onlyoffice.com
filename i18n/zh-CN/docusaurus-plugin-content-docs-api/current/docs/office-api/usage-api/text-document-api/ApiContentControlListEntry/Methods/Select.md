# Select

选择组合框/下拉列表内容控件中的列表条目，并将内容控件的文本设置为所选项目值。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiContentControlListEntry](../ApiContentControlListEntry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例选择下拉列表或组合框内容控件中的列表条目，并将内容控件的文本设置为项目的值。

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let paragraph = doc.GetElement(0);
paragraph.Push(cc);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(3);
listItem.Select();

```
