# SetGeometry

为当前形状设置自定义几何形状。

## 语法

```javascript
expression.SetGeometry(oGeometry);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oGeometry | 必需 | [ApiGeometry](../../ApiGeometry/ApiGeometry.md) |  | 要设置的几何图形。 |

## 返回值

boolean

## 示例

Applies custom geometry with specific fill and stroke properties.

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(100 * 36000);
path.SetHeight(100 * 36000);
path.SetStroke(true);
path.SetFill("norm");
path.MoveTo(50 * 36000, 0);
path.LineTo(70 * 36000, 45 * 36000);
path.LineTo(55 * 36000, 70 * 36000);
path.LineTo(100 * 36000, 100 * 36000);
path.LineTo(0, 100 * 36000);
path.Close();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(50, 75, 100)));
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
```
