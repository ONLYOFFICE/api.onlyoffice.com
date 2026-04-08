# SetCellSpacing

指定默认表格单元格间距（相邻单元格之间以及单元格与表格边缘之间的间距）。

## 语法

```javascript
expression.SetCellSpacing(nValue);
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [twips](../../Enumeration/twips.md) |  | 间距值，以磅的二十分之一（1/1440 英寸）为单位。&lt;code&gt;"Null"&lt;/code&gt; 表示不应用间距。 |

## 返回值

boolean

## 示例

此示例指定默认表格单元格间距。

```javascript editor-docx
// How to set the size of the cell spacing.

// Create a table and indicate its cell spacing.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the cell spacing to half an inch:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
tablePr.SetCellSpacing(720);
doc.Push(table);
```
