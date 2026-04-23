# SetPosition

更改绘图对象的位置。
💡 请注意，水平和垂直偏移量仅在指定的列和行单元格的限制范围内计算。
如果此值超出单元格宽度或高度，将设置另一个垂直/水平位置。

## 语法

```javascript
expression.SetPosition(nFromCol, nColOffset, nFromRow, nRowOffset);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nFromCol | 必需 | number |  | 绘图对象起始位置所在的列号。 |
| nColOffset | 必需 | [EMU](../../Enumeration/EMU.md) |  | 从 nFromCol 列到绘图对象左侧的偏移量（以英制度量单位测量）。 |
| nFromRow | 必需 | number |  | 绘图对象起始位置所在的行号。 |
| nRowOffset | 必需 | [EMU](../../Enumeration/EMU.md) |  | 从 nFromRow 行到绘图对象顶部的偏移量（以英制度量单位测量）。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例更改绘图对象的位置。

```javascript editor-xlsx
// How to change the position of the drawing on the worksheet.

// Move a drawing by setting the position.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 2, 3 * 36000);
```
