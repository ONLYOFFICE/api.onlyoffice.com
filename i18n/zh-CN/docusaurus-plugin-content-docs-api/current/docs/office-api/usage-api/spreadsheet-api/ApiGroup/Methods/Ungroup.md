# Ungroup

取消组合当前绘图对象组合。

:::note
文档生成器不支持此方法，它仅在编辑器中有效。
:::

## 语法

```javascript
expression.Ungroup();
```

`expression` - 表示 [ApiGroup](../ApiGroup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)[] \| null

## 示例

在电子表格中组合工作表上的两个形状，将组合复制到原组合旁边，然后取消组合该副本。

```javascript editor-xlsx
// Keep the original group intact and split its copy into shapes to compare grouped and ungrouped side by side.

// Ungroup the copy so its shapes become individually editable next to the untouched original group.

const worksheet = Api.GetActiveSheet();

const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.RGB(61, 155, 255));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const shape1 = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill1, stroke, 0, 0, 0, 0);
const shape2 = worksheet.AddShape("ellipse", 60 * 36000, 40 * 36000, fill2, stroke, 0, 0, 3, 0);

const group = worksheet.GroupDrawings([shape1, shape2]);
if (group) {
	const copy = group.Copy();
	worksheet.AddDrawing(copy, 4, 0, 0, 0);
	copy.Ungroup();
}
```
