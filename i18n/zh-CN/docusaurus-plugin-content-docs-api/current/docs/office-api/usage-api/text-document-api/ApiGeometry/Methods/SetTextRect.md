# SetTextRect

设置当前几何形状的文本矩形。

## 语法

```javascript
expression.SetTextRect(sLeft, sTop, sRight, sBottom);
```

`expression` - 表示 [ApiGeometry](../ApiGeometry.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLeft | 必需 | string |  | 左侧参考线名称或值。 |
| sTop | 必需 | string |  | 顶部参考线名称或值。 |
| sRight | 必需 | string |  | 右侧参考线名称或值。 |
| sBottom | 必需 | string |  | 底部参考线名称或值。 |

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
