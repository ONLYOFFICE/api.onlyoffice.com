# SetLine

设置当前形状的轮廓属性。

## 语法

```javascript
expression.SetLine(oStroke);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建形状轮廓的笔触。 |

## 返回值

boolean

## 示例

为形状设置轮廓属性。

```javascript editor-xlsx
// Creates a rectangle and changes its outline to a thick blue line.
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
worksheet.GetRange("A1").SetValue("Original shape with no border");
let newStroke = Api.CreateStroke(3 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
shape.SetLine(newStroke);
worksheet.GetRange("A2").SetValue("Border changed to 3pt blue line");

```
