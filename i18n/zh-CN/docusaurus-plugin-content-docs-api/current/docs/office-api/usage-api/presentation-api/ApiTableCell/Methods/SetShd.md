# SetShd

指定应应用于当前表格单元格范围的底纹。

## 语法

```javascript
expression.SetShd(shd);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | 必需 | [ApiShd](../../ApiShd/ApiShd.md) |  | 使用 Api.CreateShd 方法创建的底纹。 |

## 返回值

此方法不返回任何数据。

## 示例

在演示文稿中为表格单元格应用背景颜色。

```javascript editor-pptx
// How do I fill a table cell with a color in a presentation?

// Create a table and set a solid color background for a cell in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const shd = Api.CreateShd("clear", Api.RGB(51, 51, 51));
cell.SetShd(shd);

slide.RemoveAllObjects();
slide.AddObject(table);
```
