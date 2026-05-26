# SetText

设置表示组合框/下拉列表内容控件列表项显示文本的字符串。

## 语法

```javascript
expression.SetText(sText);
```

`expression` - 表示 [ApiContentControlListEntry](../ApiContentControlListEntry.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 列表项的显示文本。 |

## 返回值

boolean

## 示例

更新文档中下拉列表或组合框列表条目的显示标签。

```javascript editor-docx
// How do I change the visible text of a list item in a document?

// Rename an option in a list when the label needs to reflect updated content or terminology in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let paragraph = doc.GetElement(0);
let contentControlList = cc.GetDropdownList();
paragraph.Push(cc);
let listItem = contentControlList.GetItem(1);
listItem.SetText("Saturn");
listItem.Select();
```
