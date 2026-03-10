# AddConnectionPoint

向当前几何形状添加连接点。

## 语法

```javascript
expression.AddConnectionPoint(sAngle, sX, sY);
```

`expression` - 表示 [ApiGeometry](../ApiGeometry.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAngle | 必需 | string |  | 连接点的角度。 |
| sX | 必需 | string |  | X 位置。 |
| sY | 必需 | string |  | Y 位置。 |

## 返回值

boolean

## 示例

Creates adjustable geometry with guides and connection points for a pdf document.

```javascript editor-pdf
// Displays adjustment value and applies custom geometry to shape.
const doc = Api.GetDocument();
const page = doc.GetPage(0);

let customGeometry = Api.CreateCustomGeometry();
customGeometry.AddAdj("adj1", 25000);
customGeometry.SetAdjValue("adj1", 30000);
customGeometry.AddGuide("x1", "*/", "adj1", "w", "100000");
customGeometry.SetTextRect("x1", "0", "w", "h");
customGeometry.AddConnectionPoint("0", "hc", "0");
let path = customGeometry.AddPath();
path.SetStroke(true);
path.SetFill("norm");
path.MoveTo("l", "t");
path.LineTo("r", "t");
path.LineTo("r", "b");
path.LineTo("l", "b");
path.LineTo("x1", "hd2");
path.Close();
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
shape.GetContent().GetElement(0).AddText("Adj value: " + customGeometry.GetAdjValue("adj1"));
shape.SetPosition(1500000, 1500000);
page.AddObject(shape);
```
