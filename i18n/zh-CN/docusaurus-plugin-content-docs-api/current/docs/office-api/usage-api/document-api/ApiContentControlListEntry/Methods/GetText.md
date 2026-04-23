# GetText

返回表示组合框/下拉列表内容控件列表项显示文本的字符串。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiContentControlListEntry](../ApiContentControlListEntry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例演示如何获取下拉列表或组合框内容控件中列表项的显示文本字符串。

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(2);
let paragraph = Api.CreateParagraph();
let text = listItem.GetText();
paragraph.AddText("Text of the content control list entry: " + text);
doc.AddElement(0, paragraph);
```
