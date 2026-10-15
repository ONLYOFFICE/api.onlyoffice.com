# SetShd

指定应用于当前表格范围的底纹。

## 语法

```javascript
expression.SetShd(shd);
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | 必需 | [ApiShd](../../ApiShd/ApiShd.md) |  | 使用 Api.CreateShd 方法创建的底纹。 |

## 返回值

boolean

## 示例

在演示文稿中通过表格属性填充表格背景。

```javascript editor-pptx
// The table background is drawn under the cells, so it shows through the cells which have no fill.

// Apply a yellow background to the table style and clear the cell fills to make it visible.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetShd(Api.CreateSolidFill(Api.RGB(255, 213, 79)));
style.SetTablePr(tablePr);
table.Cells.forEach(function (row) { row.forEach(function (cell) { cell.SetShd(Api.CreateShd("nil")); }); });
slide.RemoveAllObjects();
slide.AddObject(table);
```
