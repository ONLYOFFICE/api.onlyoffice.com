# SetTableBorderInsideV

指定将在所有不在父表格最外边缘的垂直表格单元格边框上显示的边框（所有非最左侧或最右侧边框的垂直边框）。

## 语法

```javascript
expression.SetTableBorderInsideV(type, size, fill);
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [BorderType](../../Enumeration/BorderType.md) |  | 垂直表格单元格边框样式。 |
| size | 必需 | [mm](../../Enumeration/mm.md) |  | 当前边框的宽度。 |
| fill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充当前边框的颜色或图案。 |

## 返回值

boolean

## 示例

在演示文稿中通过表格属性设置内部垂直边框。

```javascript editor-pptx
// Inner vertical borders are all the column separators except the outer edges.

// Draw thin orange separators between the table columns.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderInsideV("single", 0.5, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
