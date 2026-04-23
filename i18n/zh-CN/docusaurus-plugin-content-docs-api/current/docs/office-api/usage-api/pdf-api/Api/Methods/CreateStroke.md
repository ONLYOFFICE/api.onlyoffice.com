# CreateStroke

创建为元素添加阴影的笔触。

## 语法

```javascript
expression.CreateStroke(width, fill, sDash);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位度量的阴影宽度。 |
| fill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于创建阴影的填充类型。 |
| sDash | 可选 | [DashType](../../Enumeration/DashType.md) | "solid" | 线条虚线类型。 |

## 返回值

[ApiStroke](../../ApiStroke/ApiStroke.md)

## 示例

此示例演示如何创建笔触。

```javascript editor-pdf
// How to add a stroke to the shape.

// Add solid fill and stroke to the shape properties.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
const fill1 = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(3 * 36000, fill1);
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

```
