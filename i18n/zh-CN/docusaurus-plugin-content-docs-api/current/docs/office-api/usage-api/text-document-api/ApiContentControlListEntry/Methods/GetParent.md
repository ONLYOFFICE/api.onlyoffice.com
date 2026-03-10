# GetParent

返回组合框/下拉列表内容控件中内容控件列表项的父级。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiContentControlListEntry](../ApiContentControlListEntry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiContentControlList](../../ApiContentControlList/ApiContentControlList.md)

## 示例

此示例展示如何获取列表项集合中内容控件列表项的父级。

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let item = contentControlList.GetItem(0);
let paragraph = Api.CreateParagraph();
let contentControl = item.GetParent();
paragraph.AddText("Class of item list item parent: " + contentControlList.GetClassType());
doc.AddElement(0, paragraph);
```
