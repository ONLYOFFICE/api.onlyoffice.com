# SetTableBorderBottom

设置将在当前表格底部显示的边框。

## 语法

```javascript
expression.SetTableBorderBottom(type, size, fill);
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [BorderType](../../Enumeration/BorderType.md) |  | 底部边框样式。 |
| size | 必需 | [mm](../../Enumeration/mm.md) |  | 当前下边框的宽度。 |
| fill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充当前边框的颜色或图案。 |

## 返回值

boolean

## 示例

在演示文稿中通过表格属性设置表格下边框。

```javascript editor-pptx
// The border is described by its style, its width in millimeters and its fill.

// Apply a dark gray border below the table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderBottom("single", 1, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
