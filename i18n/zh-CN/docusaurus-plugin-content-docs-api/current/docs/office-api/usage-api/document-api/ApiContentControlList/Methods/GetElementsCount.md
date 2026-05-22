# GetElementsCount

返回组合框/下拉列表内容控件的项目数量。

## 语法

```javascript
expression.GetElementsCount();
```

`expression` - 表示 [ApiContentControlList](../ApiContentControlList.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算文档中下拉列表内容控件中的条目数量。

```javascript editor-docx
// How do I find out how many items are in a combo box list in a document?

// Check the total number of selectable options available in a list control in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let count = contentControlList.GetElementsCount();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Number of items in the list: " + count);
doc.AddElement(0, paragraph);
```
