# Add

向组合框/下拉列表内容控件添加新值。

## 语法

```javascript
expression.Add(sText, sValue, nIndex);
```

`expression` - 表示 [ApiContentControlList](../ApiContentControlList.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 列表项的显示文本。 |
| sValue | 必需 | string |  | 列表项值。默认等于 sText 参数 |
| nIndex | 可选 | number | -1 | 将添加新值的位置。如果 nIndex=-1，则添加到末尾。 |

## 返回值

boolean

## 示例

此示例展示如何向内容控件列表添加项目。

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
contentControlList.Add("Venus", "planet2", 1);
let paragraph = doc.GetElement(0);
paragraph.Push(cc);
```
