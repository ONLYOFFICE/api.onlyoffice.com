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

在矩形放置到电子表格的工作表后将其边框更改为粗蓝线。

```javascript editor-xlsx
// How do I update the border style and color of a shape in a spreadsheet?

// Swap out a shape's existing border for a new stroke with a different thickness and color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
worksheet.GetRange("A1").SetValue("Original shape with no border");
let newStroke = Api.CreateStroke(3 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
shape.SetLine(newStroke);
worksheet.GetRange("A2").SetValue("Border changed to 3pt blue line");
```
