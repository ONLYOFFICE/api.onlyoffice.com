# GroupDrawings

在当前工作表中将绘图对象数组组合在一起。

:::note
文档生成器不支持此方法，它仅在编辑器中有效。
:::

## 语法

```javascript
expression.GroupDrawings(aDrawings);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aDrawings | 必需 | [ApiDrawing](../../ApiDrawing/ApiDrawing.md)[] |  | 要分组的绘图对象数组。 |

## 返回值

[ApiGroup](../../ApiGroup/ApiGroup.md) \| null

## 示例

在电子表格中将工作表上的两个形状组合为一个组合。

```javascript editor-xlsx
// Add two shapes and merge them so they can be moved and formatted as one object.

// Group the shapes and report on the sheet whether the group was created.

const worksheet = Api.GetActiveSheet();

const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.RGB(61, 155, 255));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const shape1 = worksheet.AddShape("rect", 50 * 36000, 30 * 36000, fill1, stroke, 0, 0, 0, 0);
const shape2 = worksheet.AddShape("ellipse", 50 * 36000, 30 * 36000, fill2, stroke, 3, 0, 3, 0);

const group = worksheet.GroupDrawings([shape1, shape2]);
worksheet.GetRange("A10").SetValue(group ? "Group created" : "Group not created");
```
