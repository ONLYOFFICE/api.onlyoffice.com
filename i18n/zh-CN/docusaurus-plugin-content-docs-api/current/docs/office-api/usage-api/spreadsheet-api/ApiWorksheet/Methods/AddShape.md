# AddShape

使用指定的参数向当前工作表添加形状。
💡 请注意，水平和垂直偏移量仅在指定列和行单元格的范围内计算。如果此值超过单元格宽度或高度，将设置其他垂直/水平位置。

## 语法

```javascript
expression.AddShape(sType, nWidth, nHeight, oFill, oStroke, nFromCol, nColOffset, nFromRow, nRowOffset);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 可选 | [ShapeType](../../Enumeration/ShapeType.md) | "rect" | 指定预设形状几何图形的形状类型。 |
| nWidth | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的形状宽度。 |
| nHeight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的形状高度。 |
| oFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充形状的颜色或图案。 |
| oStroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建元素阴影的笔触。 |
| nFromCol | 必需 | number |  | 形状起始位置所在的列号。 |
| nColOffset | 必需 | [EMU](../../Enumeration/EMU.md) |  | 从 nFromCol 列到形状左侧的偏移量，以英制单位测量。 |
| nFromRow | 必需 | number |  | 形状起始位置所在的行号。 |
| nRowOffset | 必需 | [EMU](../../Enumeration/EMU.md) |  | 从 nFromRow 行到形状上部的偏移量，以英制单位测量。 |

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)

## 示例

此示例使用指定的参数向工作表添加形状。

```javascript editor-xlsx
// How to add a shape to the worksheet.

// Insert a flowchart shape to the worksheet.

let worksheet = Api.GetActiveSheet();
let gradientStop1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gradientStop2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gradientStop1, gradientStop2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

```
