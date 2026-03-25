# SetFlipV

设置当前绘图的垂直翻转。

## 语法

```javascript
expression.SetFlipV(bFlip);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bFlip | 必需 | boolean |  | 指定图形是否垂直翻转。 |

## 返回值

boolean

## 示例

此示例展示如何垂直翻转绘图。

```javascript editor-xlsx
// How to set the vertical flip property of the shape.

// Create a drawing and flip it vertically.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetFlipV(true);
let flip = drawing.GetFlipV();
worksheet.SetColumnWidth(0, 28);
worksheet.GetRange("A1").SetValue("Drawing is flipped vertically: " + flip);

```
