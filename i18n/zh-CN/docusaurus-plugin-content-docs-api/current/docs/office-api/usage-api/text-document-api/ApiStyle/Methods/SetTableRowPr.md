# SetTableRowPr

设置当前样式的表格行属性。

## 语法

```javascript
expression.SetTableRowPr(tableRowPr);
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tableRowPr | 必需 | [ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md) |  | 将要设置的表格行属性。 |

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)

## 示例

此示例展示如何设置当前样式的表格行属性。

```javascript editor-docx
// How to create table row properties for style and set its height.

// Update table row properties in the style.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
let tableRowPr = Api.CreateTableRowPr();
tableRowPr.SetHeight("atLeast", 1440);
tableStyle.SetTableRowPr(tableRowPr);

let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, false, false);
```
