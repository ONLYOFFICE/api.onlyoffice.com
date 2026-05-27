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

在表格样式中存储单元格级格式，以便文档中的每个单元格继承这些设置。

```javascript editor-docx
// How do I add background shading to all table cells by defining it once in a shared style in a document?

// Centralize cell appearance settings in a reusable style rather than formatting each cell individually in a document.

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
