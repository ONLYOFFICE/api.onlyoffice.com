# GetItem

按请求中指定的位置返回组合框/下拉列表内容控件的项目。

## 语法

```javascript
expression.GetItem(nIndex);
```

`expression` - 表示 [ApiContentControlList](../ApiContentControlList.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | 必需 | number |  | 项目位置。 |

## 返回值

[ApiContentControlListEntry](../../ApiContentControlListEntry/ApiContentControlListEntry.md)

## 示例

此示例展示如何获取组合框/下拉列表的值项目。

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(0);
let paragraph = Api.CreateParagraph();
paragraph.AddText("First item value: " + listItem.GetValue());
doc.AddElement(0, paragraph);

```
