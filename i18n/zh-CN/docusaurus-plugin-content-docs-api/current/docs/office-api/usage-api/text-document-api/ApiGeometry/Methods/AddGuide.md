# AddGuide

向当前几何形状添加参考线（公式）。

## 语法

```javascript
expression.AddGuide(sName, sFormula, sX, sY, sZ);
```

`expression` - 表示 [ApiGeometry](../ApiGeometry.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 参考线名称。 |
| sFormula | 必需 | [GeometryFormulaType](../../Enumeration/GeometryFormulaType.md) |  | 公式类型。 |
| sX | 必需 | string |  | X 参数。 |
| sY | 必需 | string |  | Y 参数。 |
| sZ | 必需 | string |  | Z 参数。 |

## 返回值

boolean

## 示例

创建具有可调整参数和参考线的形状。

```javascript editor-docx
// Sets up text rectangle and connection points for the custom geometry.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let customGeometry = Api.CreateCustomGeometry();
customGeometry.AddAdj("adj1", 25000);
customGeometry.SetAdjValue("adj1", 30000);
paragraph.AddText("Adjustment value: " + customGeometry.GetAdjValue("adj1"));
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
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
paragraph.AddDrawing(shape);
```
