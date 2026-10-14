# CreateTablePr

创建空的表格属性。

## 语法

```javascript
expression.CreateTablePr();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTablePr](../../ApiTablePr/ApiTablePr.md)

## 示例

在演示文稿中创建可重用的表格属性对象。

```javascript editor-pptx
// The new object holds empty table properties that can be filled and applied to a table style.

// Build table properties with a dark gray grid and apply them to the style of a table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
table.SetStyle(style);
const tablePr = Api.CreateTablePr();
tablePr.SetTableBorderAll("single", 0.5, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
