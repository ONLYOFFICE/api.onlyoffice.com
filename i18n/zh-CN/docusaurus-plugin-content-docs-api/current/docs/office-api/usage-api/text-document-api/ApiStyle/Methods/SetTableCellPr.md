# SetTableCellPr

设置当前样式的表格单元格属性。

## 语法

```javascript
expression.SetTableCellPr(tableCellPr);
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tableCellPr | 必需 | [ApiTableCellPr](../../ApiTableCellPr/ApiTableCellPr.md) |  | 将要设置的表格单元格属性。 |

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)

## 示例

此示例展示如何设置和获取样式的表格单元格属性。

```javascript editor-docx
// How to create table cell properties for style and add shading to it.

// Update the table cell properties in the style.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
let tableCellPr = Api.CreateTableCellPr();
tableCellPr.SetShd("clear", Api.HexColor('#FF6F3D'));
tableStyle.SetTableCellPr(tableCellPr);

let table = Api.CreateTable(2, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
```
