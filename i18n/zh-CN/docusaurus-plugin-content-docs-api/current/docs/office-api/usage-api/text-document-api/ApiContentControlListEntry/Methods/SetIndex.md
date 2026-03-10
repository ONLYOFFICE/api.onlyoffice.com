# SetIndex

为组合框/下拉列表内容控件中的内容控件列表项设置索引。

## 语法

```javascript
expression.SetIndex(nIndex);
```

`expression` - 表示 [ApiContentControlListEntry](../ApiContentControlListEntry.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | 必需 | number |  | 内容控件列表项的索引。 |

## 返回值

boolean

## 示例

此示例设置列表项集合中内容控件列表项的索引。

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let paragraph = doc.GetElement(0);
let contentControlList = cc.GetDropdownList();
paragraph.Push(cc);
paragraph = Api.CreateParagraph();
let firstItem = contentControlList.GetItem(0);
let secondItem = contentControlList.GetItem(1);
let text = firstItem.GetText();
paragraph.AddText("Text of the first item: " + text);
secondItem.SetIndex(0);
firstItem = contentControlList.GetItem(0);
text = firstItem.GetText();
paragraph.AddText("\nText of the first item after change index: " + text);
doc.AddElement(0, paragraph);
```
