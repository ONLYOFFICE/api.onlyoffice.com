# SetShd

指定应应用于当前表格单元格范围的底纹。

## 语法

```javascript
expression.SetShd(sType, r, g, b);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [ShdType](../../Enumeration/ShdType.md) \| [ApiFill](../../ApiFill/ApiFill.md) |  | 应用于当前表格内容的底纹类型。可以是 ShdType 或 ApiFill。 |
| r | 必需 | [byte](../../Enumeration/byte.md) |  | 红色分量值。 |
| g | 必需 | [byte](../../Enumeration/byte.md) |  | 绿色分量值。 |
| b | 必需 | [byte](../../Enumeration/byte.md) |  | 蓝色分量值。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例指定应应用于当前表格单元格范围的底纹。

```javascript editor-pptx
// How to set shading fill to the cell.

// Create table and set its cell shading color.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
cell.SetShd(fill);

slide.RemoveAllObjects();
slide.AddObject(table);

```
