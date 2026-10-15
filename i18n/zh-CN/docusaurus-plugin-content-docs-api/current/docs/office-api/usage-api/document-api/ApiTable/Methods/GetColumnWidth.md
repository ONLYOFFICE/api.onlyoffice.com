# GetColumnWidth

返回当前表格中指定列（按索引）的宽度。

## 语法

```javascript
expression.GetColumnWidth(columnIndex);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| columnIndex | 必需 | number |  | 从零开始的列索引。 |

## 返回值

[EMU](../../Enumeration/EMU.md) \| null

## 示例

获取文档中表格特定列的宽度。

```javascript editor-docx
// Read a column width value measured in English measure units.

// Create a table, set the first column width and read it back.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetColumnWidth(0, Api.MillimetersToEmus(40));
let columnWidth = table.GetColumnWidth(0);
let paragraph = doc.GetElement(0);
paragraph.AddText("Column width: " + columnWidth);
```
