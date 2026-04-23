# Fill

设置当前图形对象的填充格式属性。

## 语法

```javascript
expression.Fill(oFill);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充图形对象的填充类型。 |

## 返回值

boolean

## 示例

此示例设置当前图形对象的填充格式属性。

```javascript editor-xlsx
// How to color a drawing with a radiant fill.

// Change the background color of the shape.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 90 * 36000, 27 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
fill = Api.CreateRadialGradientFill([gs1, gs2]);
drawing.Fill(fill);

```
