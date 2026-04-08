# CreateDropDownListContentControl

使用给定的选项列表创建新的下拉列表容器。

## 语法

```javascript
expression.CreateDropDownListContentControl(list, selected);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| list | 可选 | [ContentControlListItem](../../Enumeration/ContentControlListItem.md)[] |  | 表示下拉列表中项目的对象数组。 |
| selected | 可选 | number | -1 | 选中项的索引。 |

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## 示例

此示例展示如何创建组合框内容控件。

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateDropDownListContentControl([{display: 'one', value: '1'}, {display: 'two', value: '2'}], 1);
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);
```
