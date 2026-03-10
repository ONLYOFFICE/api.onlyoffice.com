# AddComboBoxContentControl

向文档添加新的组合框内容控件。

## 语法

```javascript
expression.AddComboBoxContentControl(list, selected);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| list | 可选 | [ContentControlListItem](../../Enumeration/ContentControlListItem.md)[] |  | 表示组合框中项目的对象数组。 |
| selected | 可选 | string |  | 默认应选中的项目的可选值（必须与 ListItem.Value 之一匹配）。 |

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## 示例

此示例展示如何向文档添加组合框内容控件：

```javascript editor-docx
let doc = Api.GetDocument();
doc.AddComboBoxContentControl();
```
