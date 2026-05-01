# GetValue

返回表示组合框/下拉列表内容控件列表项值的字符串。

## 语法

```javascript
expression.GetValue();
```

`expression` - 表示 [ApiContentControlListEntry](../ApiContentControlListEntry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取表示文档中下拉列表或组合框内容控件的列表项显示文本的字符串。

```javascript editor-docx
// How can I get the value using a content control list entry in a document?

// Get the value for a content control list entry in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(1);
let paragraph = Api.CreateParagraph();
let value = listItem.GetValue();
paragraph.AddText("Value of the content control list entry: " + value);
doc.AddElement(0, paragraph);
```
