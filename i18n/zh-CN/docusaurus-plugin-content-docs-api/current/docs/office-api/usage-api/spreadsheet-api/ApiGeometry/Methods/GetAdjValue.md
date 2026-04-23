# GetAdjValue

按名称从当前几何形状返回调整值。

## 语法

```javascript
expression.GetAdjValue(sName);
```

`expression` - 表示 [ApiGeometry](../ApiGeometry.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 调整名称。 |

## 返回值

number \| null

## 示例

创建带有参考线和连接点的可调整自定义几何图形。

```javascript editor-xlsx
// Displays adjustment value in a cell and applies geometry to shape.
let worksheet = Api.GetActiveSheet();
let customGeometry = Api.CreateCustomGeometry();
customGeometry.AddAdj("adj1", 25000);
customGeometry.SetAdjValue("adj1", 30000);
worksheet.GetRange("A7").SetValue("Adjustment: " + customGeometry.GetAdjValue("adj1"));
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
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = worksheet.AddShape("rect", 60 * 36000, 60 * 36000, fill, stroke, 9, 0, 2, 2);
shape.SetGeometry(customGeometry);
```
