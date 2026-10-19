# SetColumnWidth

设置当前表格中指定列（按索引）的宽度。

## 语法

```javascript
expression.SetColumnWidth(columnIndex, width);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| columnIndex | 必需 | number |  | 从零开始的列索引。 |
| width | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位测量的列宽。 |

## 返回值

[EMU](../../Enumeration/EMU.md) \| null

## 示例

设置文档中表格特定列的宽度。

```javascript editor-docx
// Apply a width value measured in English measure units to a single column.

// Create a 3x3 table and widen its first column to 40 millimeters.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetColumnWidth(0, Api.MillimetersToEmus(40));
```
