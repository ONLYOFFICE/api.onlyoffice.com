# SetValue

设置表示组合框/下拉列表内容控件列表项值的字符串。

## 语法

```javascript
expression.SetValue(sValue);
```

`expression` - 表示 [ApiContentControlListEntry](../ApiContentControlListEntry.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sValue | 必需 | string |  | 列表项的值。 |

## 返回值

boolean

## 示例

此示例设置下拉列表或组合框内容控件中列表项的显示文本字符串。

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}]);
let paragraph = doc.GetElement(0);
let contentControlList = cc.GetDropdownList();
paragraph.Push(cc);
let listItem = contentControlList.GetItem(2);
listItem.SetValue("Home");
listItem.Select();
paragraph = Api.CreateParagraph();
paragraph.AddText("Value of third item in list: " + listItem.GetValue());
doc.AddElement(0, paragraph);
```
