# AddColumns

向当前表格添加新列。

## 语法

```javascript
expression.AddColumns(nCount, isBefore);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | 必需 | Number |  | 要添加的列数。 |
| isBefore | 可选 | boolean | false | 指定新列是添加在当前单元格之前还是之后。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

此示例向表格添加新列。

```javascript editor-docx
// Insert new columns after the current cell.

// Get the cell, add the text to it and add columns after it.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Two new columns were added after this cell.");
table.GetCell(0, 0).AddColumns(2, false);
```
