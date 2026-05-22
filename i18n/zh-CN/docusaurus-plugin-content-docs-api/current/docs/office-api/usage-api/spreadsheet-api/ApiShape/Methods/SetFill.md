# SetFill

设置当前形状的填充属性。

## 语法

```javascript
expression.SetFill(oFill);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充形状的填充类型。 |

## 返回值

boolean

## 示例

在矩形形状添加到电子表格的工作表后为其应用纯红色填充。

```javascript editor-xlsx
// How do I change the background color of a shape in a spreadsheet?

// Paint the interior of a shape with a chosen color to update its appearance in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, Api.CreateNoFill(), stroke, 3, 0, 2, 2);
worksheet.GetRange("A1").SetValue("Original shape with no fill");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0));
shape.SetFill(fill);
worksheet.GetRange("A2").SetValue("Fill changed to red");
```
