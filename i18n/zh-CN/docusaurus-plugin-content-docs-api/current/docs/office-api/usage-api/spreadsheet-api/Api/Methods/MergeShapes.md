# MergeShapes

将绘图对象数组合并为新形状。生成的形状采用数组中第一个绘图对象的格式。

:::note
在电子表格编辑器中，文档生成器不支持此方法，它仅在编辑器中有效。
:::

## 语法

```javascript
expression.MergeShapes(drawings, operation);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| drawings | 必需 | [Drawing](../../Enumeration/Drawing.md)[] |  | 包含至少两个来自同一页面、幻灯片或工作表的绘图对象的数组。其中至少一个必须是形状。 |
| operation | 必需 | [ShapesMergeOperation](../../Enumeration/ShapesMergeOperation.md) |  | 合并操作。 |

## 返回值

[Drawing](../../Enumeration/Drawing.md)[] \| null

## 示例

将工作表上两个重叠的形状合并为一个形状。

```javascript editor-xlsx
// Build a custom shape from simple shapes with the union operation.

// Unite a rectangle and an ellipse on the active sheet into one shape filled with the color of the rectangle.

let worksheet = Api.GetActiveSheet();
let fill1 = Api.CreateSolidFill(Api.Color(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.Color(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let rectangle = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill1, stroke, 1, 0, 2, 0);
let ellipse = worksheet.AddShape("ellipse", 80 * 36000, 80 * 36000, fill2, stroke, 2, 2 * 36000, 2, 0);
Api.MergeShapes([rectangle, ellipse], "union");
```
