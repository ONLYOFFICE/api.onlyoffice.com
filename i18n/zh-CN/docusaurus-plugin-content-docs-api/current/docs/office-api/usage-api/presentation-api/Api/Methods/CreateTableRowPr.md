# CreateTableRowPr

创建空的表格行属性。

## 语法

```javascript
expression.CreateTableRowPr();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md)

## 示例

在演示文稿中创建可重复使用的表格行属性对象。

```javascript editor-pptx
// The new object holds empty row properties that can be filled once and applied to several rows.

// Build row properties with a minimum height and apply the same object to every row of a table on a slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const rowPr = Api.CreateTableRowPr();
rowPr.SetHeight("atLeast", 1000);
for (let i = 0; i < 3; i++) {
	table.GetRow(i).SetRowPr(rowPr);
}
slide.RemoveAllObjects();
slide.AddObject(table);
```
